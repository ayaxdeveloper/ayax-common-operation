import { OperationStatus } from "./OperationStatus";

export interface IOperation {
    message: string;
    status: OperationStatus;
    exceptions: any;
    ensureSuccess(mapping?: (result: any) => any): any;
}