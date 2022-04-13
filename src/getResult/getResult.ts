import { parseUserInput } from '../parseUserInput';
import { getPath } from '../getPath';
import { generateSvg } from '../generateSvg';

interface IResult {
    path: string;
    svg: string;
    error: string;
}

export function getResult(inputParams: string): IResult {
    try {
        const { size, targets } = parseUserInput(inputParams);

        const path = getPath(targets);
        const svg = generateSvg(size, targets, path);

        return {
            path,
            svg,
            error: '',
        };
    } catch ({ message }) {
        return {
            path: '',
            svg: '',
            error: message as string,
        };
    }
}
