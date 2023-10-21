'use client';

import { useRouter } from "next/navigation";
import supabase from "@/api/supabase/createClient";
import { Button } from "../login/styles";

const { data: { user } } = await supabase.auth.getUser();
console.log(user);
const userDelivery = user;
const { data, error } = await supabase
  .from('profiles')
  .select('delivery_enabled')
  .eq('user_id', user?.id)

export default function Checkout() {
  const router = useRouter();

  const checkDelivery = () => {
    if (userDelivery) {
      router.push('/delivery');
    } else {
      router.push('/pickup');
    }
  };

  return (
    <main>
      <Button onClick={(checkDelivery)}>
              Checkout
      </Button>
      {/* <div>Checkout</div> */}
    </main>
  );
}
