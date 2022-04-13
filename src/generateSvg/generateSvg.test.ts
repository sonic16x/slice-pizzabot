import { ITargets } from '../parseUserInput';
import { generateSvg } from './generateSvg';

test('generateSvg test', () => {
    const targets: ITargets = [
        [0, 0],
        [1, 3],
        [4, 4],
        [4, 2],
        [4, 2],
        [0, 1],
        [3, 2],
        [2, 3],
        [4, 1],
    ];
    const path = 'DNDENNDEDESDEDDSDNNND';

    expect(generateSvg([5, 5], targets, path)).toMatchSnapshot();
});
