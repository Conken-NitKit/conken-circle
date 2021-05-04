import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import {
  useMyProfileQuery,
  useMockProfileQuery,
} from "lib/usecase/UserUsecase";

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

export function ProfileContainer(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data, isLoading } = useMockProfileQuery(
    typeof id === "string" ? id : ""
  );
  return (
    <>
      {isLoading ? (
        <React.Fragment />
      ) : (
        <>
          <Icon />
          <Settings />
          <ProfileEdit />
          <BackHome />
          <UserName>{data.name}</UserName>
          <BioGraphy>{data.biography}</BioGraphy>
          <Follow>{data.follows.length}人</Follow>
          <Follow>{data.followers.length}人</Follow>
        </>
      )}
    </>
  );
}
