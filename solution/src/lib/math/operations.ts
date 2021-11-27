
export function add(a: number, b: number): number {
    return a + b;
}


export function sub(a: number, b: number): number {
    return a - b;
}


export function mul(a: number, b: number): number {
    return a * b;
}


export function div(a: number, b: number): number {
    return a / b;
}


export function abs(num: number): number {
    if (num < 0) return -num;
    return num;
}


function _integerExponentOnlyPow(num: number, integerExp: number): number {
    if (integerExp % 1 != 0) return global.NaN;
    if (num == 0 && integerExp == 0) return global.NaN;
    let result = 1;
    for(let i = 0; i < abs(integerExp); i++) {
        result *= num;
    }
    if (integerExp < 0) return 1 / result;
    return result;
}

export function root(num: number, root: number): number {
    if (num < 0) return global.NaN;
    let estimate = 5;
    let numOfIterations = 1000;
    for (let i = 0; i < numOfIterations; i++) {
        estimate = ((root-1)/root)*estimate + (num/root)*(1/(_integerExponentOnlyPow(estimate, root-1)));
    }
    return estimate;
}


function _decimalToFraction(decimal: number) {
    // eslint-disable-next-line no-var
    for(var denominator = 1; (decimal * denominator) % 1 !== 0; denominator++);
    return {numerator: decimal * denominator, denominator: denominator};
}


export function pow(num: number, exp: number): number {
    if (num == 0 && exp == 0) return global.NaN;
    if (exp % 1 == 0) return _integerExponentOnlyPow(num, exp);
    let expNumerator = _decimalToFraction(exp).numerator;
    let expDenominator = _decimalToFraction(exp).denominator;
    return root(_integerExponentOnlyPow(num, expNumerator), expDenominator);
}

