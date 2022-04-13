export type INumberPair = [number, number];

export type ITargets = Array<INumberPair>;

export interface IParsedInput {
    size: INumberPair;
    targets: ITargets;
}

// get targets array from user input and validate that all points inside feild size
export function parseUserInput(input: string): IParsedInput {
    if (!input || input.length === 0) {
        throw new Error('Empty input');
    }

    const preparedInput = input.trim().replace(/\s/g, '');
    const splittedArr = preparedInput.split(/\((.*)/s);

    if (!splittedArr || !splittedArr.length) {
        throw new Error('Incorrect input');
    }

    const sizeStr = splittedArr[0];

    const [width, height] = sizeStr
        .split('x')
        .map((item) => {
            if (/\D/.test(item)) {
                throw new Error('Incorrect input: use only integer numbers in field size');
            }

            return parseInt(item);
        })
        .slice(0, 2) as INumberPair
    ;

    if (!width || !height) {
        throw new Error('Incorrect input: field should br more 0');
    }


    const targets = splittedArr[1]
        .slice(0, -1)
        .split(/\)\(|\)\s\(/)
        .map((a) => {
            const [x, y] = a
                .split(',')
                .map((item) => {
                    if (/\D/.test(item)) {
                        throw new Error('Incorrect input: use only integer numbers in targets positions');
                    }

                    return parseInt(item);
                });

            if (x > width || y > height || x < 0 || y < 0) {
                throw new Error(`Point [${x}, ${y}] is not in field`);
            }

            return [x, y];
        }) as ITargets
    ;

    return {
        size: [width, height],
        targets,
    };
}
