'use client';

import { FormHeaders, Input } from '../app/login/styles';

export default function InputFields(props: {
  text: string;
  placeholder: string;
}) {
  const { text, placeholder } = props;
  return (
    <main>
      <div id="userInfo">
        <FormHeaders>{text}</FormHeaders>
        <Input type="text" placeholder={placeholder} />
      </div>
    </main>
  );
}
