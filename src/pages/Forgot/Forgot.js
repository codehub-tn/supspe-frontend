import React from "react";
import { AuthContainer, Layout } from "components";
import { useFormik } from "formik";
import { TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, reset } from "redux/auth.slice";
import useToast from "hooks/useToast";

const Forgot = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { status } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
    validateOnChange: false,
  });
  const handleSuccess = () => {
    if (status === "success") {
      dispatch(reset());
      toast("Email envoyé avec succès", "success");
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
            Mot de passe oublié
          </Typography>
          <Typography
            variant="body1"
            component="h1"
            align="center"
            sx={{ mb: 4 }}
          >
            Saississez votre e-mail nous vous enverrons un lien pour
            réinitialiser votre mot de passe
          </Typography>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            id="email"
            placeholder="Adresse email"
            autoComplete="email"
            fullWidth
            sx={{ mb: 3 }}
          />
          <LoadingButton
            loading={status === "loading"}
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mb: 2 }}
          >
            Envoyer
          </LoadingButton>
        </form>
      </AuthContainer>
    </Layout>
  );
};

export default Forgot;
