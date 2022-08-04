import { CssBaseline, ThemeProvider } from "@mui/material";
import { setToasts } from "redux/toasts.slice";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer, Toast } from "components";
import RouterConfig from "routes/routerConfig";
import theme from "styles/theme";
import "styles/globals.css";

function App() {
  const dispatch = useDispatch();
  const { toasts } = useSelector((state) => state.toasts);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Toast
        toasts={toasts}
        setToasts={(elems) => dispatch(setToasts(elems))}
      />
      <RouterConfig />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
