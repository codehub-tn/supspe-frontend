import { Header, Toast } from "components";
import "../../styles/globals.css";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../styles/theme";
import createEmotionCache from "utils/createEmotionCache";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setToasts } from "redux/toasts.slice";

const clientSideEmotionCache = createEmotionCache();
const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <ToastApp />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;

const ToastApp = () => {
  const dispatch = useDispatch();
  const { toasts } = useSelector((state) => state.toasts);
  return <Toast toasts={toasts} setToasts={(elems) => dispatch(setToasts(elems))} />;
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
