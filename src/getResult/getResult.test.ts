import { getResult } from './getResult';

test('getResult test', () => {
    expect(getResult('5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)')).toMatchSnapshot();
    expect(getResult('asdasd')).toMatchSnapshot();
});
