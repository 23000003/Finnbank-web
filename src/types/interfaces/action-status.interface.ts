export interface IActionStatus {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setErrorMessage: (message: string) => void;
  setSuccessMessage: (message: string) => void;
}
