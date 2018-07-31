import { CustomErrorHandler } from "../../Helpers/CustomErrorHandler";
import { IOperationResult } from "./IOperationResultT";
import { OperationStatus } from "./OperationStatus";

export class OperationResult<T> implements IOperationResult<T> {
    result: T;
    message: string;
    status: OperationStatus;
    exceptions: any;
    constructor(init?: Partial<OperationResult<T>>) {
        if (init) {
            Object.assign(this, init);
        }
    }

    ensureSuccess(mapping?: (result: T) => T): T {
        if (this.status === 0) {
            if (mapping) {
                return mapping(<T> this.result);
            } else {
                return this.result;
            }
        } else {
            throw CustomErrorHandler.FromOperation(this);
        }
    }
}