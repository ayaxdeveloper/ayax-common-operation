import { IHttpService } from "ayax-common-types";
import { IOperation } from "../../Types/Operation/IOperation";
import { IOperationResult } from "../../Types/Operation/IOperationResultT";
import { ISearchResponseOperationResult } from "../../Types/Operation/ISearchResponseOperationResultT";
import { Operation } from "../../Types/Operation/Operation";
import { OperationResult } from "../../Types/Operation/OperationResultT";
import { SearchResponseOperationResult } from "../../Types/Operation/SearchResponseOperationResultT";
import { IOperationService } from "../../Types/OperationService/IOperationService";

export class OperationService implements IOperationService {
    _http: IHttpService;
    _postFix: string;
    baseUrl: string;
    constructor(http: IHttpService, postFix?: string) {
        this._http = http;
        this.baseUrl = http.baseUrl;
        if (postFix) {
            this._postFix = postFix;
        }
    }

    async get<T>(url: string): Promise<IOperationResult<T>> {
        const result = await this._http.get(url);
            return new OperationResult<T>(result);
    }

    async post<T>(url: string, data: any): Promise<IOperationResult<T>> {
        const result = await this._http.post(url, data);
        return new OperationResult<T>(result);
    }

    async put<T>(url: any, data: any): Promise<IOperation> {
        const result = await this._http.put(url, data);
            return new Operation(result);
    }
    async delete<T>(url: any, data?: any): Promise<IOperation> {
        if (data) {
            const dataResult = await this._http.delete(url, data);
            return new Operation(dataResult);
        }
        const result = await this._http.delete(url);
        return new Operation(result);
    }

    async search<T>(url: string, data: any): Promise<ISearchResponseOperationResult<T>> {
        const result = await this._http.post(url, data);
        return new SearchResponseOperationResult<T>(result);
    }
}