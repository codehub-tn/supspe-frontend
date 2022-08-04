import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HOME,
  LOGIN,
  REGISTER,
  VERIFY,
  FORGOT,
  RESET,
} from "constants/routing";
import { Box, CircularProgress, styled } from "@mui/material";
const Home = lazy(() => import("pages/Home"));
const Reset = lazy(() => import("pages/Reset"));
const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import("pages/Login"));
const Forgot = lazy(() => import("pages/Forgot"));
const Verify = lazy(() => import("pages/Verify"));
const NotFound = lazy(() => import("pages/NotFound"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={FORGOT} element={<Forgot />} />
        <Route path={RESET} element={<Reset />} />
        <Route path={VERIFY} element={<Verify />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const Loader = () => (
  <LoaderContainer>
    <CircularProgress />
  </LoaderContainer>
);

const LoaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "calc(100vh - 100px)",
});

export default RouterConfig;
