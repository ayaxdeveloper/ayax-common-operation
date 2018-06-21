import { IOperationService } from "../../Types/OperationService/IOperationService";
import { OperationResult } from "../../Types/Operation/OperationResultT";
import { Operation } from "../../Types/Operation/Operation";
import { IOperationResult } from "../../Types/Operation/IOperationResultT";
import { IOperation } from "../../Types/Operation/IOperation";
import { IHttpService } from "ayax-common-types";

export class OperationService implements IOperationService {
    _http: IHttpService;
    _postFix: string;
    baseUrl: string;
    constructor(http: IHttpService, postFix?: string) {
        this._http = http;
        this.baseUrl = http.baseUrl;
        if(postFix)
        this._postFix = postFix;
    }

    async get<T>(url: string): Promise<IOperationResult<T>> {
        let result = await this._http.get(url);
            return new OperationResult<T>(result);
    }

    async post<T>(url: string, data: any): Promise<IOperationResult<T>> {
        let result = await this._http.post(url, data);
        return new OperationResult<T>(result);
    }

    async put<T>(url: any, data: any): Promise<IOperation> {
        let result = await this._http.put(url, data);
            return new Operation(result);
    }
    async delete<T>(url: any, data?: any): Promise<IOperation> {
        if(data) {
            let dataResult = await this._http.delete(url, data);
            return new Operation(dataResult);
        }
        let result = await this._http.delete(url);
        return new Operation(result);
    }
}