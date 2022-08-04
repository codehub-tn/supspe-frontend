import React from "react";
import { TextField, Typography } from "@mui/material";
import { AuthContainer, Layout } from "components";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { FORGOT, HOME, REGISTER } from "constants/routing";
import { login, reset } from "redux/auth.slice";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
// import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
    validateOnChange: false,
  });
  const handleSuccess = () => {
    if (status === "success") {
      dispatch(reset());
      navigate(HOME);
    }
  };
  React.useEffect(() => {
    handleSuccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status === "success"]);

  return (
    <Layout title="Login">
      <AuthContainer>
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h2" component="h1" align="center" sx={{ mb: 4 }}>
            Connexion
          </Typography>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            id="email"
            icon={EmailIcon}
            placeholder="Adresse email"
            autoComplete="email"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            type="password"
            id="password"
            icon={KeyIcon}
            placeholder="Mot de passe"
            autoComplete="current-password"
            sx={{ mb: 1 }}
            fullWidth
          />
          <Typography variant="body2" sx={{ mb: 2 }}>
            Mot de passe oublié <Link to={FORGOT}>réinitialiser</Link>
          </Typography>
          <LoadingButton
            loading={status === "loading"}
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mb: 2 }}
          >
            Connexion
          </LoadingButton>
          {/* <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ mb: 1 }}
          >
            Sign in with google account
          </Button> */}
          <Typography variant="body2">
            Pas de compte? <Link to={REGISTER}>s'inscrire</Link>
          </Typography>
        </form>
      </AuthContainer>
    </Layout>
  );
};

export default Login;
