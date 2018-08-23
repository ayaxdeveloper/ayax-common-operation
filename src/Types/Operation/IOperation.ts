import { OperationStatus } from "./OperationStatus";

export interface IOperation {
    message: string;
    status: OperationStatus;
    exceptions: any;
    systemMessage: string;
    ensureSuccess(mapping?: (result: any) => any): any;
}