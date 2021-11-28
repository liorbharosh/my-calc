import CalcResponseModel from "../classes/CalcResponseModel";

export default interface ICalcOutputBoundry {
    responseObject: CalcResponseModel;
    sendResponse(): void;
// eslint-disable-next-line semi
}
