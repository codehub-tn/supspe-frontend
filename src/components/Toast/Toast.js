import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";

const Toast = (props) => {
  const { variant, toasts, setToasts, ...rest } = props;
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (toasts.length && !messageInfo) {
      setMessageInfo({ ...toasts[0] });
      setToasts(toasts.slice(1));
      setOpen(true);
    } else if (toasts.length && messageInfo && open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts, messageInfo, open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited }}
    >
      <Alert
        onClose={handleClose}
        severity={messageInfo ? messageInfo.severity : "info"}
        variant={variant}
        {...rest}
      >
        {messageInfo ? messageInfo.message : undefined}
      </Alert>
    </Snackbar>
  );
};

Toast.defaultProps = {
  variant: "filled",
};

Toast.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  onClose: PropTypes.func,
};

export { Toast };
