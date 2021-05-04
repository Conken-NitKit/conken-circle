import React from "react";
import styled from "styled-components";

const BackButton = styled.div`
  font-size: 5vw;
  margin-top: -1vw;
  width: 4vw;
  float: left;
`;

export function BackHome() {
  return (
    <BackButton
      onClick={() => {
        window.location.href = "/Home";
      }}
    >
      ⇦
    </BackButton>
  );
}
