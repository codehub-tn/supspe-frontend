import { Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

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

Layout.defaultProps = {};

export { Layout };
