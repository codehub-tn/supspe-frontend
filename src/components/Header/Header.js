import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { AuthControlsLoggedIn, AuthControlsGuest } from "./AuthControls";
import { useSelector } from "react-redux";
import { HOME } from "constants/routing";
import Link from "next/link";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ width: "100%" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href={HOME}>
            <Typography>LOGO</Typography>
          </Link>
          {user ? <AuthControlsLoggedIn /> : <AuthControlsGuest />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
