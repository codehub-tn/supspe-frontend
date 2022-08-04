import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  TextField,
  Typography,
  Stepper as MuiStepper,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Layout, AuthContainer } from "components";
import { HOME, LOGIN } from "constants/routing";
import { register, reset, sendEmailVerification } from "redux/auth.slice";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { registerValidation } from "utils/auth.validations";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const { user, status } = useSelector((state) => state.auth);
  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const formik = useFormik({
    initialValues: {
      role: "CUSTOMER",
      name: "",
      email: "",
      password: "",
      tel: "",
      adress: "",
    },
    onSubmit: (values) => {
      dispatch(register(values));
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: registerValidation,
  });

  const handleSuccess = async () => {
    if (status === "success" && user) {
      dispatch(reset());
      dispatch(sendEmailVerification());
      if (user.role === "VENDOR") {
        handleNextStep();
      } else {
        navigate(HOME);
      }
    }
  };
  useEffect(() => {
    handleSuccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status === "success"]);

  return (
    <Layout title="Register">
      <AuthContainer>
        <Typography variant="h1" align="center" sx={{ mb: 4 }}>
          S'inscrire
        </Typography>
        <Stepper
          activeStep={activeStep}
          role={formik.values.role}
          sx={{ my: 4 }}
        />
        {activeStep === 0 && (
          <CreateAccountForm loading={status === "loading"} formik={formik} />
        )}
        {activeStep === 1 && <CreateStoreForm />}
      </AuthContainer>
    </Layout>
  );
};

const Stepper = (props) => {
  const { activeStep, role, ...restProps } = props;
  return (
    <MuiStepper activeStep={activeStep} {...restProps}>
      <Step>
        <StepLabel>Créer un compte</StepLabel>
      </Step>
      {role === "VENDOR" && (
        <Step>
          <StepLabel>Créer votre magasin</StepLabel>
        </Step>
      )}
    </MuiStepper>
  );
};

const CreateAccountForm = (props) => {
  const { formik, loading, ...restProps } = props;
  return (
    <Box {...restProps}>
      <form onSubmit={formik.handleSubmit}>
        <RadioGroup
          name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
        >
          <FormControlLabel
            value="CUSTOMER"
            control={<Radio />}
            label="Je suis un client"
          />
          <FormControlLabel
            value="VENDOR"
            control={<Radio />}
            label="Je suis un vendeur"
          />
        </RadioGroup>
        <TextField
          error={Boolean(formik.touched.name && formik.errors.name)}
          value={formik.values.name}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          id="name"
          icon={EmailIcon}
          label="Nom"
          autoComplete="name"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          error={Boolean(formik.touched.email && formik.errors.email)}
          value={formik.values.email}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          id="email"
          icon={EmailIcon}
          label="Adresse email"
          autoComplete="email"
          fullWidth
          sx={{ mb: 2 }}
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
          label="Mot de passe"
          autoComplete="current-password"
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          error={Boolean(formik.touched.tel && formik.errors.tel)}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.tel}
          helperText={formik.touched.tel && formik.errors.tel}
          type="tel"
          id="tel"
          icon={KeyIcon}
          label="Numéro de téléphone"
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          error={Boolean(formik.touched.adress && formik.errors.adress)}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.adress}
          helperText={formik.touched.adress && formik.errors.adress}
          type="tel"
          id="adress"
          icon={KeyIcon}
          label="Adresse"
          sx={{ mb: 2 }}
          fullWidth
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mb: 2 }}
        >
          {formik.values.role === "VENDOR" ? "Etape suivante" : "S'inscrire"}
        </LoadingButton>
      </form>
      <Typography variant="body2">
        Avez avez déjà un compte? <Link to={LOGIN}>Connexion</Link>
      </Typography>
    </Box>
  );
};

const CreateStoreForm = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
    validateOnChange: false,
  });
  return (
    <>
      <TextField
        error={Boolean(formik.touched.adress && formik.errors.adress)}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.adress}
        helperText={formik.touched.adress && formik.errors.adress}
        type="tel"
        id="adress"
        icon={KeyIcon}
        label="Adresse"
        sx={{ mb: 1 }}
        fullWidth
      />
    </>
  );
};

export default Register;
