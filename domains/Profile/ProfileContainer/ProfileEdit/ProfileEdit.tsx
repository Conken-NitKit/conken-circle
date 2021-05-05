import React, { useState } from "react";
import styled from "styled-components";

import { useUserListQuery } from "lib/usecase/UserListUsecase";

const EditButton = styled.p`
  position: absolute;
  left: 30vw;
  border: solid 1px black;
  border-radius: 30px;
  padding: 1vw 3vw;
  font-size: 1.5rem;
`;

const ProfileText = styled.textarea`
  height: 30vw;
  width: 50vw;
  font-size: 2vw;
  border-radius: 1vw;
  background-color: #808080;
  color: white;
`;

const EditProfiler = styled.div<{ profiler: boolean }>`
  position: absolute;
  left: 20vw;
  top: ${({ profiler }) => (profiler ? "8vh" : "-10000vh")};
  transition: top 0.4s;
`;

const SaveButton = styled.div`
  border: solid 1px black;
  border-radius: 30px;
  padding: 2% 8%;
  width: 6%;
  margin-top: 0.5vw;
`;

export function ProfileEdit() {
  const [profiler, setProfiler] = useState<boolean>(false);
  const { data, isLoading } = useUserListQuery();

  return (
    <>
      <div>{JSON.stringify({ data })}</div>
      <EditButton onClick={() => setProfiler(true)}>Edit Profile</EditButton>
      <EditProfiler profiler={profiler}>
        <ProfileText placeholder={"素敵なプロフィールを書きましょう！"} />
        <SaveButton onClick={() => setProfiler(false)}>SAVE</SaveButton>
      </EditProfiler>
    </>
  );
}
