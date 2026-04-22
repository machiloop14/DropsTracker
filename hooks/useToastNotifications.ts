import { useToast } from "react-native-toast-notifications";

type toastType = "normal" | "success" | "warning" | "danger";

export const useToastNotification = () => {
  const toast = useToast();

  const show = (message: string, type: toastType = "normal") =>
    toast.show(message, {
      type: type,
      placement: "top",
      duration: 4000,
      animationType: "slide-in",
    });

  return {
    show,
    success: (msg: string) => show(msg, "success"),
    warnig: (msg: string) => show(msg, "warning"),
    danger: (msg: string) => show(msg, "danger"),
    info: (msg: string) => show(msg, "normal"),
  };
};
