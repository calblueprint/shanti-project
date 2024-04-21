'use client';

import { useState } from 'react';
import { FormHeaders } from '../../app/login/styles';
import { Input } from '../InputFieldsFolder/styles';

export default function PickupInputs(props: {
  text: string;
  placeholder: string;
  inputType: string;
}) {
  const { text, placeholder, inputType } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <main>
      <div id="pickupInfo">
        <FormHeaders>{text}</FormHeaders>
        <Input
          $pickColor={false}
          $wrongLogin={false}
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}
