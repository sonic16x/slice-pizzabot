import { getPathBetweenTwoPoints } from './getPathBetweenTwoPoints';

test('getPathBetweenTwoPoints test', () =>{
    expect(getPathBetweenTwoPoints([0, 0], [3, 4])).toBe('EEENNNN');
    expect(getPathBetweenTwoPoints([0, 0], [0, 4])).toBe('NNNN');
    expect(getPathBetweenTwoPoints([0, 0], [0, 0])).toBe('');
});
