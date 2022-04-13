import { getPathBetweenTwoPoints, Action } from '../getPathBetweenTwoPoints';
import { INumberPair, ITargets } from '../parseUserInput';

// get path by nearest points
function getOptimalPath(targets: ITargets): string {
    // start from first point (we add 0,0 here before)
    let currentTarget: number = 0;
    // array with processed targets (we have delivery pizza in every target only one time)
    const processedTargets: number[] = [];
    // string result like a 'DNNEED'
    let result = '';

    // process targets until we have it
    while (processedTargets.length < targets.length - 1) {
        // min path from current target to some another
        let minPath: string | undefined;
        // index of target where we have min path
        let minPathTargetIndex!: number;

        // finding nearest target
        for (let i = 0; i < targets.length; i++) {
            // scip processed target and current
            if (currentTarget === i || processedTargets.includes(i)) {
                continue;
            }

            // get path between current target and checked
            const path = getPathBetweenTwoPoints(targets[currentTarget], targets[i]);

            // if founded path less that we have, we have to write it, also if we until don`t have path also write (for first time)
            if (minPath === undefined || (path.length < minPath.length)) {
                minPath = path;
                minPathTargetIndex = i;
            }
        }

        // save this target as processed
        processedTargets.push(currentTarget);
        // add founded path to result also add DROP action
        result += `${minPath}${Action.DROP}`;

        currentTarget = minPathTargetIndex;
    }

    return result;
}

export function getPath(targets: ITargets): string {
    // add 0, 0 point because we have to start from 0, 0
    const targetsWithStart = [[0, 0] as INumberPair, ...targets];

    return getOptimalPath(targetsWithStart);
}
