'use client';

import InputFields from '../InputFieldsFolder/InputFields';

export default function LoginForm(props: {
  changeUserName: (newUsername: string) => void;
  changePassword: (newPassword: string) => void;
  isError: boolean;
  showPassword: boolean;
}) {
  const { isError, changeUserName, changePassword, showPassword } = props;
  return (
    <div>
      <InputFields
        inputType="text"
        text="Email address"
        placeholder="Enter Email"
        changeUserName={changeUserName}
        changePassword={changePassword}
        isPassword={false}
<<<<<<< HEAD
        isError={isError}
=======
>>>>>>> a896ffce653abaaa278ecd02f5ab0d9ba699dc93
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
