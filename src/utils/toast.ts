import { toast } from "react-toastify";
// position default to top right
export const showToast = {
  success: (message: string) => {
    toast.success(message);
  },
  // to refactor based on real time fetching
  loading: (message: string) => {
    toast(message, {
      position: "top-right",
      // onOpen: () => window.alert('Called when I open'),
      // onClose: (reason?: boolean | string) => window.alert('Called when I close')
    });
  },
  error: (message: string) => {
    toast.error(message);
  },
  warning: (message: string) => {
    toast.warning(message);
  },
  info: (message: string) => {
    toast.info(message);
  },
};
