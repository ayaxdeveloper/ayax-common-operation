import { CustomErrorHandler } from "../../Helpers/CustomErrorHandler";
import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";
import { OperationStatus } from "./OperationStatus";

export class OperationResult<T> {
    result: T;
    message: string;
    status: OperationStatus;
    exceptions: any;
    constructor(init?: Partial<OperationResult<T>>) {
        if (init) {
            Object.assign(this, init);
        }
    }

    ensureSuccess(args? : IEnsureSuccessParameters): T {
        if (this.status === 0) {
            if (args && args.onSuccess) {
                args.onSuccess(this.message);
            }
            if (args && args.onDone) {
                args.onDone();
            }
            return this.result;
        } else {
            if (args && args.onError) {
                args.onError(this.message);
            } 
            if (args && args.onDone) {
                args.onDone();
            }
            throw CustomErrorHandler.FromOperation(this);
        }
    }
}