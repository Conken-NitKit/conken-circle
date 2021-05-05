import { NextPage } from "next";
import React, { FormEventHandler, useRef } from "react";

import { useMySignUpMutate } from "lib/usecase/AuthUsecase";

export const SignUp: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordRef2 = useRef<HTMLInputElement>();
  const { mutateAsync } = useMySignUpMutate();

  const submitHandler: FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === passwordRef2.current.value) {
      console.log(`email: ${emailRef.current.value}`);
      console.log(`username: ${usernameRef.current.value}`);
      console.log(`password: ${passwordRef.current.value}`);
    }
    mutateAsync({
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="メールアドレス" type="email" ref={emailRef} />
      <input placeholder="ユーザーネーム" type="username" ref={usernameRef} />
      <input placeholder="パスワード" type="password" ref={passwordRef} />
      <input
        placeholder="確認用パスワード"
        type="password"
        ref={passwordRef2}
      />
      <button type="submit">ログイン</button>
    </form>
  );
};
