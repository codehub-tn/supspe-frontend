import { createTheme, responsiveFontSizes } from "@mui/material";

export const Colors = {
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  white: "#fff",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#131921",
    },
    secondary: {
      main: "#FF9900",
    },
    tertiary: {
      main: "#fff",
    },
    quartenary: {
      main: "#232F3E",
    },
    background: {
      paper: "rgb(235,235,235)",
    },
    blue: {
      main: "#3B5998",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "50px",
    },
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     "*::-webkit-scrollbar": {
    //       height: "10px",
    //       width: "12px",
    //       backgroundColor: "rgba(0, 24, 53, 0.5)",
    //     },
    //     "*::-webkit-scrollbar-track": {
    //       boxShadow: "inset 0 0 6px rgba(80, 80, 80, 0.1)",
    //     },
    //     "*::-webkit-scrollbar-thumb": {
    //       borderRadius: "5px",
    //       backgroundColor:
    //         mode === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
