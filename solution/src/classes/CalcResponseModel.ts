import ICalcOutputBoundry from "../interfaces/ICalcOutputBoundry";

class CalcResponseModel{
    readonly answer: ICalcOutputBoundry;

    constructor() {
        this.answer = {
            answer: global.NaN
        };
    }
}
