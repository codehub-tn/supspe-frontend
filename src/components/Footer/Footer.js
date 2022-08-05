import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import IconButton from "components/shared/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  CardFooter,
  CardIcons,
  ContainerFooter,
  LinkFooter,
  LogoFooter,
} from "./Footer.styles";
import FooterContainer from "components/containers/FooterContainer";
const Footer = () => {
  return (
    <FooterContainer>
      <Divider variant="middle" />
      <ContainerFooter maxWidth="md">
        <Grid container spacing={4}>
          <Grid item md={3} xs={6}>
            <LinkFooter>Communauté</LinkFooter>
            <LinkFooter>Blog</LinkFooter>
            <LinkFooter>Communauté</LinkFooter>
            <LinkFooter>Communauté</LinkFooter>
          </Grid>
          <Grid item md={3} xs={6}>
            <LinkFooter>Communauté</LinkFooter>
            <LinkFooter>Blog</LinkFooter>
          </Grid>
          <CardFooter item md={6} xs={12}>
            <LogoFooter variant="h4">Logo</LogoFooter>
            <CardIcons>
              <IconButton
                icon={FacebookIcon}
                fontSize="medium"
                variant={"contained"}
                sx={{ mr: 1 }}
              />
              <IconButton
                icon={FacebookIcon}
                fontSize="medium"
                variant={"contained"}
                sx={{ mr: 1 }}
              />
              <IconButton
                icon={FacebookIcon}
                fontSize="medium"
                variant={"contained"}
              />
            </CardIcons>
          </CardFooter>
        </Grid>
        <Typography align="center" variant="body2">
          © 2022 Tous droits réservés
        </Typography>
      </ContainerFooter>
    </FooterContainer>
  );
};

export { Footer };
