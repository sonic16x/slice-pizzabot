export function getRandomParams() {
    // generate random targets and show path
    const size = 3 + Math.floor(Math.random() * 7);
    const pointsCount = Math.floor(size / 1.1);
    let paramsStr = `${size}x${size} `;

    for (let i = 0; i < pointsCount; i++) {
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        paramsStr += `(${x}, ${y}) `;
    }

    return paramsStr;
}
