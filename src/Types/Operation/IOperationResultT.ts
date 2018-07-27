import { OperationStatus } from "./OperationStatus";

export interface IOperationResult<T> {
    result: T;
    message: string;
    status: OperationStatus;
    exceptions: any;
    ensureSuccess(mapping?: (result: T) => T): T;
}