import React from "react";
import styled from "styled-components";

import { BackHome } from "./BackHome";
import { ProfileEdit } from "./ProfileEdit";
import { Settings } from "./Settings";

const Icon = styled.div`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: url("/profile.jpg");
  object-fit: cover;
  position: absolute;
  margin-top: 7vw;
`;

const UserName = styled.div`
  position: absolute;
  top: 20vw;
  font-size: 3vw;
`;

const BioGraphy = styled.div`
  position: absolute;
  top: 26vw;
  font-size: 1.5vw;
  width: 48%;
`;

const Follow = styled.p`
  position: relative;
  top: 18vw;
  left: 15vw;
  font-size: 1.3vw;
`;

export function ProfileContainer() {
  return (
    <>
      <Icon />
      <Settings />
      <ProfileEdit />
      <BackHome />
      <UserName>ユーザー名</UserName>
      <BioGraphy>
        プロフィール
        <br />
        っっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっl
      </BioGraphy>
      <Follow>フォロー人</Follow>
      <Follow>フォロワー人</Follow>
    </>
  );
}
