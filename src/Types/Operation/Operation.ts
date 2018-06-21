import { OperationStatus } from "./OperationStatus";
import { IOperation } from "./IOperation";
import { IEnsureSuccessParameters } from "../EnsureSuccess/IEnsureSuccessParameters";

export class Operation implements IOperation {
    message: string;
    status: OperationStatus;
    constructor(init?: Partial<Operation>) {
        if(init) {
            Object.assign(this, init);
        }
    }

    ensureSuccess(args? : IEnsureSuccessParameters): Operation {
        if(this.status == 0) {
            if(args && args.onSuccess) {
                args.onSuccess(this.message);
            }
            if(args && args.onDone) {
                args.onDone();
            }
            return this;
        } else {
            if(args && args.onError) {
                args.onError(this.message);
            } 
            if(args && args.onDone) {
                args.onDone();
            }
            throw new Error(this.message);
        }
    }
}