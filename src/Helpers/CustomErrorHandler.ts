import { Operation } from "../Types/Operation/Operation";
import { OperationResult } from "../Types/Operation/OperationResultT";
import { SearchResponseOperationResult } from "../Types/Operation/SearchResponseOperationResultT";
export class CustomErrorHandler {
    static FromOperation<T>(operation: Operation | OperationResult<T> | SearchResponseOperationResult<T>) : Error {
        if (operation.message) {
            console.error(`Message: ${operation.message}`);
        }
        
        if (operation.systemMessage) {
            console.error(`SystemMessage: ${operation.systemMessage}`);
        }
        
        const error = new Error(operation.message);
        if (error.stack) {
            console.error(`Stack: ${error.stack}`);
        }
        return error;
    }
}