import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material/index";
import { Link } from "react-router-dom";

const ImageUploadButton = styled(Button)(({ theme }) => ({
  maxHeight: 610,
  maxWidth: 610,
  paddingRight: "17px",
  textTransform: "none",
  border: `0.2px solid ${theme.palette.tsColors.ts_charcoal3}`,
  marginRight: theme.spacing(0.4),
}));
const WarningButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.tsColors.ts_error,
  color: "#fff",

  "&.MuiButton-outlined": {
    color: theme.palette.tsColors.ts_error,
    backgroundColor: `${theme.palette.tsColors.ts_error}00`,
  },
  "&.Mui-disabled": {
    color: "#fff",
  },

  "&:hover": {
    color: "#fff",
    backgroundColor: `${theme.palette.tsColors.ts_error}60`,
    boxShadow: `0px 0px 5px ${theme.palette.tsColors.ts_error}`,
  },
}));
const WarningButtonOutlined = styled(Button)(({ theme }) => ({
  color: theme.palette.tsColors.ts_error,
  backgroundColor: `${theme.palette.tsColors.ts_error}00`,
  border: `1px solid ${theme.palette.tsColors.ts_error}75`,

  "&.Mui-disabled": {
    color: "#fff",
  },

  "&:hover": {
    color: "#fff",
    backgroundColor: `${theme.palette.tsColors.ts_error}`,
    boxShadow: `0px 0px 5px ${theme.palette.tsColors.ts_error}25`,
  },
}));
const PostContainer = styled(Grid)(({ theme }) => ({
  marginBottom: "40px",
  backgroundColor: `${theme.palette.tsColors.ts_darker_green}`,
  border: `1px solid ${theme.palette.tsColors.ts_darker_green4}`,
  borderRadius: 6,
}));
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const styles = {
  link: {
    textDecoration: "none",
  },
};
export {
  ImageUploadButton,
  WarningButton,
  WarningButtonOutlined,
  StyledLink,
  styles,
  PostContainer,
};
