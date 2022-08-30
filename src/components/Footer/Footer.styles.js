import { Box, Container, Grid, styled, Typography } from "@mui/material";

export const ContainerFooter = styled(Container)({
  padding: "14px 0",
});
export const LinkFooter = styled(Typography)({
  padding: 8,
  fontWeight: "550",
});

export const LogoFooter = styled(Typography)({
  marginBottom: 7,
});

export const CardIcons = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const CardFooter = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});
export const CreditFooter = styled(Grid)({
  display: "flex",
});
