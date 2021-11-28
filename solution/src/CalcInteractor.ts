/**
 * The calc interactor manages the calc requests from the user
 * and is responsible for interacting with modules (entities/business rules)
 * And constructing a response model to send to the user.
 */

import CalcResponseModel from "./classes/CalcResponseModel";
import ICalcOutputBoundry from "./interfaces/ICalcOutputBoundry";

class CalcInteractor implements ICalcOutputBoundry {
    responseObject: CalcResponseModel;

    constructor() {
        this.responseObject = { answer: 3 };
    }

    sendResponse(): void {
        throw Error("Not implemented");
    }
}