import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

import { useMockProfileQuery } from "lib/usecase/UserUsecase";

import { BackHome } from "./BackHome";
import { ProfileEdit } from "./ProfileEdit";
import { Settings } from "./Settings";

const Icon = styled.label<{ url: string }>`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: url("${(props) => props.url}");
  background-size: cover;
  position: absolute;
  margin-top: 7vw;
`;

const IconInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
  cursor: pointer;
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
  const [iconUrl, setIconUrl] = useState("/profile.jpg");
  const { data, isLoading } = useMockProfileQuery(
    typeof id === "string" ? id : ""
  );

  const iconInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const imageFile = e.currentTarget.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setIconUrl(imageUrl);
  };
  return (
    <>
      {isLoading ? (
        <React.Fragment />
      ) : (
        <>
          <Icon url={iconUrl} htmlFor="icon" />
          <IconInput
            id="icon"
            type="file"
            accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
            onChange={iconInputHandler}
          />
          <Settings />
          <ProfileEdit />
          <BackHome />
          <UserName>{data?.name}</UserName>
          <BioGraphy>{data?.biography}</BioGraphy>
          <Follow>{data?.follows.length}人</Follow>
          <Follow>{data?.followers.length}人</Follow>
        </>
      )}
    </>
  );
}
