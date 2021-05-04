import React, { useState } from "react";
import styled from "styled-components";

const PostButtonContainer = styled.div`
  color: white;
  background-color: black;
  height: 6vw;
  width: 6vw;
  border-radius: 50%;
  position: absolute;
  bottom: 3vw;
  right: 3vw;
`;

const PostButton = styled.div`
  font-size: 4vw;
  text-align: center;
`;

const PostModalContaner = styled.div<{ modal: boolean }>`
  bottom: ${({ modal }) => (modal ? "0" : "-100vh")};
  left: 1vw;
  height: 98vh;
  width: 98vw;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 16px 16px 0 0;
  position: fixed;
  text-align: center;
  flex-wrap: wrap;
  transition: all 0.3s;
  background: white;
  z-index: 2;
`;

const CloseIcon = styled.div`
  position: absolute;
  left: 1vw;
  height: 3vw;
  width: 3vw;
  font-size: 4vw;
`;

const Poster = styled.div`
  font-size: 2.5vw;
  letter-spacing: 1px;
  margin-top: 1vw;
  background-color: black;
  color: white;
  width: 10%;
  border-radius: 20px;
  position: absolute;
  right: 2vw;
`;

const InputContainer = styled.label`
  display: flex;
  margin-top: 7vw;
  position: relative;
  left: 2vw;
  input {
    font-size: 1.5vw;
    width: 80%;
    height: 6vw;
  }
`;

const StarContainer = styled.ul``;

const Star = styled.img`
  background-image: url("/star.jpg");
  object-fit: cover;
  float: left;
  position: relative;
  left: 2vw;
`;

export function PostModal() {
  const [modal, setModal] = useState<boolean>(false);
  const [evaluation, setEvaluation] = useState<number>(0);

  return (
    <>
      <PostButtonContainer onClick={() => setModal(true)}>
        <PostButton>＋</PostButton>
      </PostButtonContainer>

      <PostModalContaner modal={modal}>
        <CloseIcon onClick={() => setModal(false)}>×</CloseIcon>
        <Poster>投稿</Poster>
        <InputContainer>
          <input placeholder={"商品名"} />
        </InputContainer>
        <InputContainer>
          <input placeholder={"Amazonリンク"} />
        </InputContainer>
        <InputContainer>
          <input placeholder={"コメント"} />
        </InputContainer>
        <StarContainer>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </StarContainer>
      </PostModalContaner>
    </>
  );
}
