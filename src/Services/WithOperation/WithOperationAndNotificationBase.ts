import { DefaultNotificationProvider, INotificationProvider } from "ayax-common-types";
import { IOperationService } from "../../Types/OperationService/IOperationService";

export class WithOperationBase {
    _operation: IOperationService;
    _notification: INotificationProvider;
    constructor(operationService: IOperationService, notificationProvider?: INotificationProvider) {
        this._operation = operationService;
        this._notification = notificationProvider ? notificationProvider : new DefaultNotificationProvider();
    }
}