import { OperationStatus } from "./OperationStatus";
import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";

export interface IOperation {
    message: string;
    status: OperationStatus;
    ensureSuccess(args? : IEnsureSuccessParameters): IOperation;
}