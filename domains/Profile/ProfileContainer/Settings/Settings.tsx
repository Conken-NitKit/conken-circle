import React, { useState } from "react";
import styled from "styled-components";

const SettingsButton = styled.div`
  font-size: 6vw;
  position: absolute;
  left: 24vw;
`;

const SettingsList = styled.ul<{ open: boolean }>`
  background-color: gray;
  list-style: none;
  position: absolute;
  left: ${({ open }) => (open ? "-1.5vw" : "-100vw")};
  bottom: 0;
  transition: left 0.6s;
  z-index: 2;
  width: 20%;
  border-radius: 5px;
  :last-child {
    border-bottom: solid 1px black;
  }
`;

const SettingItem = styled.li`
  border-top: solid 1px black;
  font-size: 1.5vw;
  letter-spacing: 2px;
`;

export function Settings(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <SettingsButton onClick={() => setOpen(true)}>⚙</SettingsButton>
      <SettingsList open={open}>
        <SettingItem onClick={() => setOpen(false)}>×</SettingItem>
        <SettingItem>ログアウト</SettingItem>
        <SettingItem>リストを作成</SettingItem>
        <SettingItem>サポート</SettingItem>
      </SettingsList>
    </>
  );
}
