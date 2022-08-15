import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { AuthControlsLoggedIn, AuthControlsGuest } from "./AuthControls";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME } from "constants/routing";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ width: "100%" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={HOME}>
            <Typography>LOGO</Typography>
          </Link>
          {user ? <AuthControlsLoggedIn /> : <AuthControlsGuest />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
