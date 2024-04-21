'use client';

import InputFields from '../InputFieldsFolder/InputFields';

export default function LoginForm(props: {
  changeUserName: (newUsername: string) => void;
  changePassword: (newPassword: string) => void;
  isError: boolean;
  showPassword: boolean;
}) {
  const { isError, changeUserName, changePassword, showPassword} = props;
  return (
    <div>
      <InputFields
        inputType="text"
        text="Email address"
        placeholder="Enter Email"
        changeUserName={changeUserName}
        changePassword={changePassword}
        isPassword={false}
        isError={isError}
      />
      <InputFields
        inputType={showPassword ? 'text' : 'password'}
        text="Password"
        placeholder="Enter Password"
        changeUserName={changeUserName}
        changePassword={changePassword}
        isPassword
        isError={isError}
      />
    </div>
  );
}
