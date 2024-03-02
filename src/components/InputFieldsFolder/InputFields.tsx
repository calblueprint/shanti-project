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
<<<<<<< HEAD
  isError: boolean;
=======
>>>>>>> a896ffce653abaaa278ecd02f5ab0d9ba699dc93
}) {
  const {
    text,
    placeholder,
    inputType,
    changeUserName,
    changePassword,
<<<<<<< HEAD
=======

>>>>>>> a896ffce653abaaa278ecd02f5ab0d9ba699dc93
    isPassword,
    isError,
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
<<<<<<< HEAD
          $pickColor={isError}
          $wrongLogin={isError}
=======
>>>>>>> a896ffce653abaaa278ecd02f5ab0d9ba699dc93
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}
