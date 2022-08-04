import { Button, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Layout } from "components";
import { HOME } from "constants/routing";
import React from "react";
const NotFound = () => {
  return (
    <Layout title="NotFound">
      <Container maxWidth="lg" sx={{ mt: 10, width: "%100" }}>
        <Stack direction="column" spacing={1} alignItems="center">
          <Typography sx={{ fontSize: "80px" }}>🪔</Typography>
          <Typography sx={{ fontWeight: "600", fontSize: "100px" }}>
            404
          </Typography>
          <Typography component="span" variant="h6">
            {" "}
            LA PAGE QUE VOUS RECHERCHIEZ N’EXISTE PAS.{" "}
          </Typography>

          <Button
            mt="4"
            href={HOME}
            variant="contained"
            sx={{ fontSize: "15px", px: 2, py: 2 }}
          >
            {" "}
            Retorner à l'Acceuil De Site{" "}
          </Button>
        </Stack>
      </Container>
    </Layout>
  );
};

export default NotFound;
