import { useDispatch } from "react-redux";
import { toast } from "redux/toasts.slice";

const useToast = () => {
  const dispatch = useDispatch();
  const toastFunc = (message, severity = "info") => {
    dispatch(toast({ message, severity }));
  };
  return toastFunc;
};

export default useToast;
