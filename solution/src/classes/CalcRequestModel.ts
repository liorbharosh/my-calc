export default class CalcRequestModel {
    operationsQueue: OperationsQueue;

    constructor(operationsQueue: OperationsQueue) {
        this.operationsQueue = operationsQueue;
    }
}
