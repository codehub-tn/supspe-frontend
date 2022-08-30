import { Box, Container } from "@mui/material";

const AuthContainer = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export { AuthContainer };
