export default class CalcRequestModel {
    operationsQueue: objectsQueue;

    constructor(operationsQueue: objectsQueue) {
        this.operationsQueue = operationsQueue;
    }
}
