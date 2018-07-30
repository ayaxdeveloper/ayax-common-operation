import { IOperationService } from "../../Types/OperationService/IOperationService";

export class WithOperationBase {
    _operation: IOperationService;
    constructor(operationService: IOperationService) {
        this._operation = operationService;
    }
}