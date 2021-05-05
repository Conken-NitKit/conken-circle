import { NextPage } from "next";
import React, { FormEventHandler, useRef } from "react";

export const SignIn: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const submitHandler: FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    console.log(`email: ${emailRef.current.value}`);
    console.log(`password: ${passwordRef.current.value}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="メールアドレス" type="email" ref={emailRef} />
      <input placeholder="パスワード" type="password" ref={passwordRef} />
      <button type="submit">ログイン</button>
    </form>
  );
};
