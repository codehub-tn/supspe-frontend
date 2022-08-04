import React from "react";
import { AuthContainer, Layout } from "components";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { reset, verifyEmail } from "redux/auth.slice";
import useToast from "hooks/useToast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HOME } from "constants/routing";

const Forgot = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { status } = useSelector((state) => state.auth);
  const handleSuccess = () => {
    if (status === "success") {
      dispatch(reset());
      toast("Email vérifié avec succès", "success");
      navigate(HOME);
    }
  };
  React.useEffect(() => {
    if (searchParams.get("token")) {
      dispatch(verifyEmail(searchParams.get("token")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    handleSuccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status === "success"]);
  return (
    <Layout>
      <AuthContainer>
        <Stack alignItems="center">
          <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
            Vérification de votre email
          </Typography>
          {status === "loading" && <CircularProgress />}
        </Stack>
      </AuthContainer>
    </Layout>
  );
};

export default Forgot;
