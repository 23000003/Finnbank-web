import { useEffect, useState } from "react";
import { showToast } from "../utils/toast";

export default function useActionStatus(loadingState: boolean) {
  const [loading, setLoading] = useState(loadingState);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (errorMessage) {
      showToast.error(errorMessage);
      setErrorMessage(null);
    }
  }, [errorMessage]);

  useEffect(() => {
    // only trigger this for action states like post/patch/delete
    if (successMessage) {
      showToast.success(successMessage);
      setSuccessMessage(null);
    }
  }, [successMessage]);

  return {
    loading,
    setLoading,
    setErrorMessage,
    setSuccessMessage,
  };
}
