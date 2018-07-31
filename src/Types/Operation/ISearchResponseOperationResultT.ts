import { IOperation } from "./IOperation";
import { OperationStatus } from "./OperationStatus";

export interface ISearchResponseOperationResult<T> extends IOperation {
    result: {
        data: T;
        total: number;
    };
    message: string;
    status: OperationStatus;
    exceptions: any;
    ensureSuccess(mapping?: (result: T) => T): {data: T, total: number};
}