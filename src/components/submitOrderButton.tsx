// SubmitOrderButton.tsx
import React from 'react';

// Assuming that submitOrder.ts is a TypeScript file with a named export for submitOrder
// and it is located in the same directory as this component file.
import { createOrder } from '../api/supabase/queries/order_queries'; // ensure this path is correct and the file exists

function SubmitOrderButton() {
  const handleSubmit = async () => {
    try {
      await createOrder('some order data');
      // Replace the alert with a more user-friendly notification system if needed
    } catch (error) {
      // If the error is an instance of Error, we can access the message property safely.
      if (error instanceof Error) {
        
        // Replace the alert with a more user-friendly notification system if needed
        throw new Error(`Failed to submit order: ${error.message}`);
      }
    }
  };

  // Add type="button" to the button element
  return (
    <button type="button" onClick={handleSubmit}>
      Submit Order
    </button>
  );
}

export default SubmitOrderButton;
