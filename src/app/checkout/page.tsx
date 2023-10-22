'use client';

import { useRouter } from "next/navigation";
import supabase from "@/api/supabase/createClient";
import { Button } from "../login/styles";
import { User } from "@/schema/schema";
import { useEffect } from "react";

// console.log( user);

// const userDelivery = async () => {
// const { data, error } = await supabase
// .from('profiles')
// .select()
// .eq('user_id', user?.id)
// .single()
// }


export default function Checkout() {
  const router = useRouter();
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }
    getCurrentUser();
  }, [])
  


  // const checkDelivery = () => {
  //   if (data) {
  //     router.push('/delivery');
  //   } else {
  //     router.push('/pickup');
  //   }
  // };

  return (
    <main>
      {/* <Button onClick={(checkDelivery)}>
              Checkout
      </Button> */}
      <div>Checkout</div>
    </main>
  );
}
