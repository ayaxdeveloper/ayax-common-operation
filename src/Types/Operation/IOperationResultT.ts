import { IOperation } from "./IOperation";
import { OperationStatus } from "./OperationStatus";

export interface IOperationResult<T> extends IOperation {
    result: T;
    message: string;
    status: OperationStatus;
    exceptions: any;
    ensureSuccess(mapping?: (result: T) => T): T;
}