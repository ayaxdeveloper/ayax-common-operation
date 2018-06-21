export interface IEnsureSuccessParameters {
    onError?: (message?: any) => void;
    onSuccess?: (message?: any) => void;
    onDone?: () => void;
}