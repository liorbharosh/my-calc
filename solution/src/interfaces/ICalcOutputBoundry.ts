import CalcResponseModel from "../classes/CalcResponseModel";

export default interface ICalcOutputBoundry {
    responseObject: CalcResponseModel;
    sendResponse(responseObject: CalcResponseModel): void;
}
