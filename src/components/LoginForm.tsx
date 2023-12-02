'use client';

import InputFields from './InputFields';

export default function LoginForm(props: {
  changeUserName: (newUsername: string) => void;
  changePassword: (newPassword: string) => void;
}) {
  const { changeUserName, changePassword } = props;
  return (
    <div>
      <InputFields
        inputType="text"
        text="Email address"
        placeholder="Enter Email"
        changeUserName={changeUserName}
        changePassword={changePassword}
        isPassword={false}
      />
      <InputFields
        inputType="password"
        text="Password"
        placeholder="Enter Password"
        changeUserName={changeUserName}
        changePassword={changePassword}
        isPassword
      />
    </div>
  );
}
