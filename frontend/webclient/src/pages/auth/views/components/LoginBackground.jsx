import React from "react";
import { AuthBackground, AuthOverlay, AuthTitles, H1 } from "../../styles";

function LoginBackground() {
  return (
    <>
      <AuthBackground>
        <AuthOverlay>
          <AuthTitles>
            <H1 variant="h4" textAlign="left">
              ONLINE TICKETING SYSTEM
            </H1>
          </AuthTitles>
        </AuthOverlay>
      </AuthBackground>
    </>
  );
}

export default LoginBackground;
