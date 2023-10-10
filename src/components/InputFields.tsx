'use client';

import { FormHeaders, Input } from '../app/login/styles';
import { useState } from 'react';
export default function InputFields(props: {
  text: string;
  placeholder: string;
  inputType: string;
  changeUserName: Function;
  changePassword: Function;
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

  const handleChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
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
