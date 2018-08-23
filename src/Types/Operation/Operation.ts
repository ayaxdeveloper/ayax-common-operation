import { CustomErrorHandler } from "../../Helpers/CustomErrorHandler";
import { IOperation } from "./IOperation";
import { OperationStatus } from "./OperationStatus";

export class Operation implements IOperation {
    exceptions: any;
    systemMessage: string;
    message: string;
    status: OperationStatus;

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