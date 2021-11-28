export default class CalcResponseModel{
    readonly answer: number;

    constructor(answer: number | null) {
        this.answer = answer ? answer : global.NaN;
    }
}
