import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>Vapi{title ? ` - ${title}` : ""}</title>
      </Helmet>
      <Box component="main" sx={{ minHeight: "calc(100vh - 100px)" }}>
        {children}
      </Box>
    </>
  );
};

Layout.defaultProps = { children: PropTypes.element.isRequired };

export { Layout };
