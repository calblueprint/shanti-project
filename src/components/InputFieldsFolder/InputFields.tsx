'use client';

import { useState } from 'react';
import { FormHeaders, Input } from './styles';

export default function InputFields(props: {
  text: string;
  placeholder: string;
  inputType: string;
  changeUserName: (newUsername: string) => void;
  changePassword: (newPassword: string) => void;
  isPassword: boolean;
}) {
  const {
    text,
    placeholder,
    inputType,
    changeUserName,
    changePassword,

    isPassword,
  } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (isPassword) {
      changePassword(value);
    } else {
      changeUserName(value);
    }
  };

  return (
    <main>
      <div id="userInfo">
        <FormHeaders>{text}</FormHeaders>
        <Input
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}
