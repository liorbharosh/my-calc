/**
 * The calc interactor manages the calc requests from the user
 * and is responsible for interacting with modules (entities/business rules)
 * And constructing a response model to send to the user.
 */

import CalcRequestModel from "./classes/CalcRequestModel";
import CalcResponseModel from "./classes/CalcResponseModel";
import ICalcInputBoundry from "./interfaces/ICalcInputBoundry";
import ICalcOutputBoundry from "./interfaces/ICalcOutputBoundry";

class CalcInteractor implements ICalcOutputBoundry, ICalcInputBoundry {
    requestObject: CalcRequestModel;
    responseObject: CalcResponseModel;

    constructor() {
        this.requestObject = { operationsQueue: new objectsQueue() };
        this.responseObject = { answer: 3 };
    }

    sendResponse(): void {
        throw Error("Not implemented");
    }
}