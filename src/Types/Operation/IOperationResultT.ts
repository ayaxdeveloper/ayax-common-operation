import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";
import { OperationStatus } from "./OperationStatus";

export interface IOperationResult<T> {
    result: T;
    message: string;
    status: OperationStatus;
    ensureSuccess(args? : IEnsureSuccessParameters): T;
}