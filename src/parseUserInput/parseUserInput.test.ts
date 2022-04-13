import { parseUserInput } from './parseUserInput';

test('parseUserInput test', () =>{
    expect(parseUserInput('5x5 (4, 4) (1,3)')).toEqual({size: [5, 5], targets: [[4, 4], [1, 3]]});
    expect(parseUserInput('5x5 (4, 4) (1,3) (2,2)')).toEqual({size: [5, 5], targets: [[4, 4], [1, 3], [2, 2]]});


    expect(() => parseUserInput('')).toThrowError('Empty input');
    expect(() => parseUserInput('   ')).toThrowError('Incorrect input');
    expect(() => parseUserInput('5x5d (4, 4) (1,3)')).toThrowError('Incorrect input: use only integer numbers in field size');
    expect(() => parseUserInput('5 (4, 4) (1,3)')).toThrowError('Incorrect input: field should br more 0');
    expect(() => parseUserInput('3x3 (4, 4) (1,3)')).toThrowError('Point [4, 4] is not in field');
    expect(() => parseUserInput('5x5 (4, 4j) (1,3)')).toThrowError('Incorrect input: use only integer numbers in targets positions');
});
