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

    ensureSuccess(): Operation {
        if (this.status === 0) {
            return this;
        } else {
            throw CustomErrorHandler.FromOperation(this);
        }
    }
}