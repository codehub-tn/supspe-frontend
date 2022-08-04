import { Button as MuiButton, Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "constants/routing";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountMenu from "./AccountMenu";

const AuthControlsLoggedIn = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton>
        <FavoriteBorderIcon style={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <ShoppingCartIcon style={{ color: "white" }} />
      </IconButton>
      <AccountMenu />
    </Stack>
  );
};

const AuthControlsGuest = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Button to={LOGIN}>Login</Button>
      <Button to={REGISTER}>Register</Button>
    </Stack>
  );
};

const Button = ({ to, children }) => {
  return (
    <Link to={to}>
      <MuiButton variant="contained" color="secondary">
        {children}
      </MuiButton>
    </Link>
  );
};

export { AuthControlsLoggedIn, AuthControlsGuest };
