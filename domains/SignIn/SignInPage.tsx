import { NextPage } from "next";
import React, { FormEventHandler, useRef } from "react";

import { useMySignInMutate } from "lib/usecase/AuthUsecase";

export const SignIn: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const { mutateAsync } = useMySignInMutate();

  const submitHandler: FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    console.log(`email: ${emailRef.current.value}`);
    console.log(`password: ${passwordRef.current.value}`);
    mutateAsync({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="メールアドレス" type="email" ref={emailRef} />
      <input placeholder="パスワード" type="password" ref={passwordRef} />
      <button type="submit">ログイン</button>
    </form>
  );
};
