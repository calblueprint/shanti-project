import Link from 'next/link';
import {testFetchData,testFetchUserByUUID, testAddUserAddress} from "../supabase/tests/user_test" ;

export default function Checkout() {
  testFetchData();
  testFetchUserByUUID();
  testAddUserAddress();
  
  return (
    <main>
      <Link href="/login">Login</Link>
    </main>
  );
}
