'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import supabase from '@/api/supabase/createClient';
import { fetchUserByUUID } from '@/api/supabase/queries/user_queries';
import { Button } from '../login/styles';

import NavBar from '../../components/NavBar';

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

      const data = await fetchUserByUUID();
      setDeliveryEnabled(data.delivery_allowed);
    })();
  }, []);

  const router = useRouter();
  const checkDelivery = () => {
    if (deliveryEnabled) {
      router.push('/delivery');
    } else {
      router.push('/pickup');
    }
  };
  return (
    <main>
      <NavBar />
      <Button onClick={checkDelivery}>Checkout</Button>
    </main>
  );
}
