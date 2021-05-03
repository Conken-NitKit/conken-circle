import { useRouter } from "next/router";
import React, { FormEventHandler, useRef } from "react";

import { useAuthStateQuery } from "lib/usecase/AuthUsecase";
import {
  ISignupArgument,
  useSignUpMutation,
} from "lib/usecase/domains/SignupUsecase";

export const SignupForm: React.FC = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordForConfirmationRef = useRef<HTMLInputElement>();

  const { mutateAsync } = useSignUpMutation();
  const { data } = useAuthStateQuery();

  const handleSubmit: FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault();
    if (
      passwordRef.current.value !== passwordForConfirmationRef.current.value
    ) {
      alert("パスワードが一致しましせん");
      return;
    }

    const signupArgument: ISignupArgument = {
      email: emailRef.current.value,
      userName: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    await mutateAsync(signupArgument);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>{JSON.stringify(data)}</p>
        <p>メールアドレス</p>
        <input name="email" type="email" ref={emailRef} />
      </div>
      <div>
        <p>ユーザーネーム</p>
        <input name="username" ref={usernameRef} />
      </div>
      <div>
        <p>パスワード</p>
        <input name="password" type="password" ref={passwordRef} />
      </div>
      <div>
        <p>パスワード（確認用）</p>
        <input
          name="password-for-confirmation"
          type="password"
          ref={passwordForConfirmationRef}
        />
      </div>
      <button type="submit">登録する</button>
    </form>
  );
};
