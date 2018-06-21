import { OperationStatus } from "./OperationStatus";
import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";

export interface IOperationResult<T> {
    result: T;
    message: string;
    status: OperationStatus;
    ensureSuccess(args? : IEnsureSuccessParameters): T
}