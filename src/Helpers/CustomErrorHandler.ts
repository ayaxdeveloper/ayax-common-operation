import { Operation } from "../Types/Operation/Operation";
import { OperationResult } from "../Types/Operation/OperationResultT";
export class CustomErrorHandler {
    static FromOperation<T>(operation: Operation | OperationResult<T>) : Error {
        console.error(`Error: ${operation.message}`);
        if (operation.exceptions) {
            console.error(`Exception: ${JSON.stringify(operation.exceptions)}`);
        }
        const error = new Error(operation.message);
        if (error.stack) {
            console.error(`Stack: ${error.stack}`);
        }
        return error;
    }
}