
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

function _integersOnlyPow(num: number, integerExp: number): number {
    if (num == 0 && integerExp == 0) return global.NaN;
    let result = 1;
    for(let i = 0; i < integerExp; i++) {
        result *= num;
    }
    return result;
}

export function root(num: number, root: number): number {
    if (num < 0) return global.NaN;
    let estimate = 5;
    let numOfIterations = 1000;
    for (let i = 0; i < numOfIterations; i++) {
        estimate = ((root-1)/root)*estimate + (num/root)*(1/(_integersOnlyPow(estimate, root-1)));
    }
    return estimate;
}