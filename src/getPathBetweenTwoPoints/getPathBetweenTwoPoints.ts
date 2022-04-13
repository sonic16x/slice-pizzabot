import { INumberPair } from '../parseUserInput';

export enum Action {
    DROP = 'D',
    EAST = 'E',
    WEST = 'W',
    NORTH = 'N',
    SOUTH = 'S',
}

// get path between two points
export function getPathBetweenTwoPoints(a: INumberPair, b: INumberPair): string {
    const xDiff = b[0] - a[0];
    const yDiff = b[1] - a[1];

    const xDirection = xDiff > 0 ? Action.EAST : Action.WEST;
    const yDirection = yDiff > 0 ? Action.NORTH : Action.SOUTH;

    const xPath = xDirection.repeat(Math.abs(xDiff));
    const yPath = yDirection.repeat(Math.abs(yDiff));

    return xPath + yPath;
}
