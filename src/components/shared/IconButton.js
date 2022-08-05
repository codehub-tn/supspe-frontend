import React from "react";
import { Button, IconButton as MuiIconButton, styled } from "@mui/material";

const IconButton = ({ field, variant, icon: Icon, fontSize, ...rest }) => {
  if (field)
    return (
      <MuiIconButton {...rest}>
        <Icon />
      </MuiIconButton>
    );
  else
    return (
      <CustomBtn variant={variant} fontSize={fontSize} {...rest}>
        <Icon />
      </CustomBtn>
    );
};

const calcSize = (fontSize) => {
  switch (fontSize) {
    case "small":
      return "30px";
    case "medium":
      return "48px";
    case "large":
      return "52px";
    default:
      return "30px";
  }
};
const CustomBtn = styled(Button)(({ fontSize }) => ({
  width: calcSize(fontSize),
  height: calcSize(fontSize),
  minWidth: "unset",
  borderRadius: "50%",
}));

export default IconButton;
