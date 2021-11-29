import CalcRequestModel from "../classes/CalcRequestModel";

export default interface ICalcInputBoundry {
    requestObject: CalcRequestModel;
    sendRequst(): void;
// eslint-disable-next-line semi
}
