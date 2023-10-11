'use client';

import InputFields from './InputFields';

export default function LoginForm(props: {
  changeUserName: Function;
  changePassword: Function;
}) {
  const { changeUserName, changePassword } = props;
  return (
    <div>
      <InputFields
        inputType="text"
        text="Email address"
        placeholder="thisisanemail@email.com"
        changeUserName={changeUserName}
        changePassword={changePassword}
        isPassword={false}
      />
      <InputFields
        inputType="password"
        text="Password"
        placeholder="************"
        changeUserName={changeUserName}
        changePassword={changePassword}
        isPassword
      />
    </div>
  );
}
