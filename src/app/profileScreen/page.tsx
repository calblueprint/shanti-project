'use client';

import { LogOutButton, GlobalStyle, PopUp } from './style';

import { signOut } from '../../api/supabase/auth/auth';

import NavBar from '../../components/NavBar';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation';

import Footer from '../../components/Footer';

export default function Profile() {
  const router = useRouter();

  const showToastMessage = () => {
    signOut();
    toast("You've been Logged Out! Redirecting...", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  };
  const CloseButton = ({ closeToast }) => (
    <i className="material-icons" onClick={closeToast}>
      OK
    </i>
  );
  return (
    <main>
      <NavBar />
      <GlobalStyle />
      <LogOutButton onClick={() => showToastMessage()}>Log Out!</LogOutButton>
      <PopUp
        closeButton={false}
        autoClose={3000}
        hideProgressBar={true}
        limit={1}
      />
      <Footer />
    </main>
  );
}
