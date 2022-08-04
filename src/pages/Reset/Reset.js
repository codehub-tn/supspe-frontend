import React from "react";
import { AuthContainer, Layout } from "components";
import { useFormik } from "formik";
import { TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { reset, resetPassword } from "redux/auth.slice";
import useToast from "hooks/useToast";
import { useSearchParams } from "react-router-dom";

const Reset = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const { status } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: (values) => {
      dispatch(resetPassword({ ...values, token: searchParams.get("token") }));
    },
    validateOnChange: false,
  });
  const handleSuccess = () => {
    if (status === "success") {
      dispatch(reset());
      toast("Mot de passe change avec succès", "success");
    }
  };
  React.useEffect(() => {
    handleSuccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status === "success"]);
  return (
    <Layout>
      <AuthContainer>
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
            Réinitialiser mot de passe
          </Typography>
          <Typography
            variant="body1"
            component="h1"
            align="center"
            sx={{ mb: 2 }}
          >
            Saississez votre nouveau mot de passe
          </Typography>
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            type="password"
            id="password"
            placeholder="Mot de passe"
            autoComplete="new-password"
            sx={{ mb: 3 }}
            fullWidth
          />
          <LoadingButton
            loading={status === "loading"}
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mb: 2 }}
          >
            Enregistrer
          </LoadingButton>
        </form>
      </AuthContainer>
    </Layout>
  );
};

export default Reset;
