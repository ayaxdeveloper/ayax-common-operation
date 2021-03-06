import { IOperation } from "../Operation/IOperation";
import { IOperationResult } from "../Operation/IOperationResultT";
import { ISearchResponseOperationResult } from "../Operation/ISearchResponseOperationResultT";

export interface IOperationService {
    baseUrl: string;
    get<T>(url: string): Promise<IOperationResult<T>>;
    post<T>(url: string, data: any): Promise<IOperationResult<T>>;
    put<T>(url: string, data: any): Promise<IOperation>;
    delete<T>(url: string, data?: any): Promise<IOperation>;
    search<T>(url: string, data?: any): Promise<ISearchResponseOperationResult<T>>;
}