'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import supabase from "@/api/supabase/createClient";
import { Button } from "../login/styles";
import { User } from "@/schema/schema";
import { fetchDeliveryByUUID, fetchUserByUUID } from "@/api/supabase/queries/user_queries";

// console.log( user);

// const userDelivery = async () => {
// const { data, error } = await supabase
// .from('profiles')
// .select()
// .eq('user_id', user?.id)
// .single()
// }


// export default function Checkout() {
//   const router = useRouter();
//   useEffect(() => {
//     (async () => {
//       const {data, error} = await supabase.auth.getSession();
//       if (error) throw error;

//     })

export default function Checkout() {
  const [deliveryEnabled, setDeliveryEnabled] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();

      if (error) throw error;
      if (
        !sessionData ||
        !sessionData.session ||
        !sessionData.session.user ||
        !sessionData.session.user.id
      )
        return;

      const data = await fetchUserByUUID(sessionData.session.user.id as string);
      

      setDeliveryEnabled(data);
    })();
  }, []);
    // const getCurrentUser: Promise<string | undefined> = async () => {
    //   const { data: { user } } = await supabase.auth.getUser();
    //   if (user !== null) {
    //     return user.id;
    //   }
    //   console.log("No user logged in.");
    // }
    // getCurrentUser().then((value) => {
    //   const userId: string = value;
    //   const deliveryOption = fetchDeliveryByUUID(userId);
    //   console.log(deliveryOption)
    // });
    const router = useRouter();
    const checkDelivery = () => {
      
    }
  return (
    <main>
      <Button onClick={(checkDelivery)}>
              Checkout
      </Button>
      {/* <div>Checkout</div> */}
    </main>
  );
}



  // const checkDelivery = () => {
  //   if (data) {
  //     router.push('/delivery');
  //   } else {
  //     router.push('/pickup');
  //   }
  // };