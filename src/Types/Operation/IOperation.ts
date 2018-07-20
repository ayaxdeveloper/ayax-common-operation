import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";
import { OperationStatus } from "./OperationStatus";

export interface IOperation {
    message: string;
    status: OperationStatus;
    exceptions: any;
    ensureSuccess(args? : IEnsureSuccessParameters): IOperation;
}