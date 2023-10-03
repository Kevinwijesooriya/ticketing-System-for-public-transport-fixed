import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PSection from "./PSection";
import LogoWName from "../../../assets/logos/TS_Logo_white.png";
const AuthBackground = styled(PSection)`
  position: relative;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2015/09/09/19/39/train-932835_960_720.jpg")
    bottom center no-repeat;
  min-height: 750px;
  background-size: cover;
  display: block;
`;
const AuthBackgroundRegister = styled(PSection)`
  position: relative;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  min-height: 750px;
  background-image: linear-gradient(-43deg, #00264f 100%, #23232390 0%);
  background-size: cover;
  display: block;
`;
const AuthOverlay = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  opacity: 1;
  top: 0px;
  left: 0px;
  background-image: linear-gradient(-43deg, #00264fbc 100%, #23232390 0%);
  justify-content: center;
  align-items: center;
  min-height: 750px;
`;
const AuthOverlayRegister = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  opacity: 1;
  top: 0px;
  left: 0px;
  background: url(${LogoWName}) center no-repeat;
  justify-content: center;
  align-items: center;
  min-height: 750px;
`;
const AuthTitles = styled(Box)`
  max-width: 800px;
`;
const H1 = styled(Typography)`
  color: #fff;
  font-size: 5.6rem;
  font-weight: 700;
  margin-bottom: 10rem;
`;

const H4 = styled(Typography)`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 200;
`;
export {
  AuthBackground,
  AuthBackgroundRegister,
  AuthOverlayRegister,
  AuthOverlay,
  AuthTitles,
  H1,
  H4,
};
