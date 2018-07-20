import { CustomErrorHandler } from "../../Helpers/CustomErrorHandler";
import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";
import { IOperation } from "./IOperation";
import { OperationStatus } from "./OperationStatus";

export class Operation implements IOperation {
    message: string;
    status: OperationStatus;
    exceptions: any;
    constructor(init?: Partial<Operation>) {
        if (init) {
            Object.assign(this, init);
        }
    }

    ensureSuccess(args? : IEnsureSuccessParameters): Operation {
        if (this.status === 0) {
            if (args && args.onSuccess) {
                args.onSuccess(this.message);
            }
            if (args && args.onDone) {
                args.onDone();
            }
            return this;
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