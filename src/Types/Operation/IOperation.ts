import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";
import { OperationStatus } from "./OperationStatus";

export interface IOperation {
    message: string;
    status: OperationStatus;
    ensureSuccess(args? : IEnsureSuccessParameters): IOperation;
}