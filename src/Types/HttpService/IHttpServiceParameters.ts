import { IHttpService } from "ayax-common-types";

export interface IHttpServiceParameters {
    http: IHttpService;
    postFix?: string;
    onError?: (exception: Error) => void;
}