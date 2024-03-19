/* eslint-disable */
import { useState } from 'react';

function PickupButton({
}: {
  day: string;
  date: string;
  start: string;
  end: string;
}) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  // const defaultStyle = 'bg-[#4b711d]/[0.13] text-[#4B711D] border-[#547829]';
  // const selectedStyle = 'bg-[#547829] text-white border-[#547829]';

  // const handleClick = () => {
    setIsSelected(!isSelected);
  // };

  return <button type="button" aria-label="PickUPButtons" />;
}

export default PickupButton;
