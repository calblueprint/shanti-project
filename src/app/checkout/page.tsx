'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import supabase from "@/api/supabase/createClient";
import { Button } from "../login/styles";
import { User } from "@/schema/schema";
import { fetchUserByUUID } from "@/api/supabase/queries/user_queries";

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
      setDeliveryEnabled(data.delivery_allowed);
    })();
  }, []);

    const router = useRouter();
    const checkDelivery = () => {
      if (deliveryEnabled) {
        router.push("/delivery")
      }
      else {
        router.push("/pickup")
      }
    }
  return (
    <main>
      <Button onClick={(checkDelivery)}>
              Checkout
      </Button>
    </main>
  );
}