'use client';

import PickupInputs from './PickupInputs';

export default function PickupForm() {
  return (
    <div>
      <PickupInputs inputType="text" text="Name" placeholder="John Smith" />
      <PickupInputs
        inputType="phone"
        text="Phone Number"
        placeholder="+1-123-456-7890"
      />
    </div>
  );
}
