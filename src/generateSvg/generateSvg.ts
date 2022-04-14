import { Action } from '../getPathBetweenTwoPoints';
import { ITargets } from '../parseUserInput';

const ceilRes = 50;
const margin = 50;
const targetRadius = 5;
const labelMargin = 10;
const triangleSize = 5;
const cursorSpeed = 0.2;

// just function for generate svg image
export function generateSvg([sizeX, sizeY], targets: ITargets, path: string): string {
    const width = sizeX * ceilRes + margin * 2;
    const height = sizeY * ceilRes + margin * 2;

    const labelsSvg: string[] = [];
    const targetsSvg: string[] = [];
    const gridLinesSvg: string[] = [];
    const pathSvg: string[] = [];
    const trianglesSvg: string[] = [];

    trianglesSvg.push(
        `<polygon points="${margin},0 ${margin + triangleSize},${triangleSize} ${margin - triangleSize},${triangleSize}" style="fill:rgb(50,50,50);stroke-width:1" />`
    );

    trianglesSvg.push(
        `<polygon points="${width},${height - margin} ${width - triangleSize},${height - margin - triangleSize} ${width - triangleSize},${height - margin + 5}" style="fill:rgb(50,50,50);stroke-width:1" />`
    );

    targets.forEach(([x, y]) => {
        const svgX = margin + x * ceilRes;
        const svgY = height - margin - y * ceilRes;
        targetsSvg.push(`<circle cx="${svgX}" cy="${svgY}" r="${targetRadius}" stroke="#f00" stroke-width="0" fill="#f00" />`);
        labelsSvg.push(`<text x="${svgX + targetRadius}" y="${svgY - targetRadius}" class="small">(${x}, ${y})</text>`);
    });

    for (let i = 1; i < (sizeX + 2); i++) {
        const x = i * ceilRes;
        gridLinesSvg.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" style="stroke:rgb(50,50,50);stroke-width:1" />`);
        labelsSvg.push(`<text x="${x + labelMargin}" y="${height - margin + labelMargin * 2}" class="small">${i - 1}</text>`);
    }

    for (let i = 1; i < (sizeY + 2); i++) {
        const y = height - i * ceilRes;
        gridLinesSvg.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" style="stroke:rgb(50,50,50);stroke-width:1" />`);
        labelsSvg.push(`<text x="${margin - labelMargin * 2}" y="${y - labelMargin}" class="small">${i - 1}</text>`);
    }

    let prevX = margin;
    let prevY = height - margin;

    let cursorPath: string = `M ${margin} ${height - margin}`;

    path.split('').forEach((action, index) => {
        if (action === Action.DROP || index === path.length - 1) {
            return;
        }

        let x;
        let y;

        switch (action) {
            case Action.SOUTH:
                x = prevX;
                y = prevY + ceilRes;
                break;
            case Action.NORTH:
                x = prevX;
                y = prevY - ceilRes;
                break;
            case Action.WEST:
                x = prevX - ceilRes;
                y = prevY;
                break;
            case Action.EAST:
                x = prevX + ceilRes;
                y = prevY;
                break;
        }

        pathSvg.push(`<line x1="${prevX}" y1="${prevY}" x2="${x}" y2="${y}" style="stroke-dasharray: 5 5 ; stroke: #00F; stroke-width: 2;" />`);
        cursorPath += `L ${x} ${y}`;

        prevX = x;
        prevY = y;
    });

    const pathLength = path.replace(/D/g, '').length;
    const animationTime = cursorSpeed * pathLength;

    return `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#fff" stroke="black" stroke-width="2"/>
            ${gridLinesSvg.join('\n')}
            ${trianglesSvg.join('\n')}
            ${pathSvg.join('\n')}
            ${targetsSvg.join('\n')}
            ${labelsSvg.join('\n')}

            <path id="cursorPath" class="cursorPath" d="${cursorPath}" visibility="hidden"/>
            <circle id="cursor" r="${targetRadius}" stroke="#00f" stroke-width="0" fill="#00f"/>
            <animateMotion xlink:href="#cursor" dur="${animationTime}s" repeatCount="indefinite" rotate="auto">
                <mpath xlink:href="#cursorPath" />
            </animateMotion> 
        </svg>
    `;
}
