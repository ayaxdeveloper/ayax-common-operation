import { CustomErrorHandler } from "../../Helpers/CustomErrorHandler";
import { OperationStatus } from "./OperationStatus";

export class SearchResponseOperationResult<T> {
    result: {
        data: T;
        total: number;
    };
    message: string;
    status: OperationStatus;
    exceptions: any;
    constructor(init?: Partial<SearchResponseOperationResult<T>>) {
        if (init) {
            Object.assign(this, init);
        }
    }

    ensureSuccess(mapping?: (result: T) => T): {data: T, total: number} {
        if (this.status === 0) {
            if (mapping) {
                return {
                    data: mapping(this.result.data),
                    total: this.result.total
                };
            } else {
                return this.result;
            }
        } else {
            throw CustomErrorHandler.FromOperation<T>(this);
        }
    }
}