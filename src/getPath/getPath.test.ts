import { getPath } from './getPath';

test('getPathBetweenTwoPoints test', () =>{
    expect(getPath([[1, 3], [4, 4]])).toBe('ENNNDEEEND');
    expect(getPath([[4, 4], [1, 3]])).toBe('ENNNDEEEND');
});
