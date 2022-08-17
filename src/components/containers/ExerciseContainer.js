import React from "react";
import { Container } from "@mui/material";

const ExerciseContainer = ({ children }) => {
  return <Container maxWidth="xl">{children}</Container>;
};

export default ExerciseContainer;
