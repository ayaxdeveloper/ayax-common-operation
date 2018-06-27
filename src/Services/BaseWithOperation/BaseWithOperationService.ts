import { IOperationService } from "../../Types/OperationService/IOperationService";

export class BaseWithOperationService {
    private _operation: IOperationService;
    constructor(operationService: IOperationService) {
        this._operation = operationService;
    }
}