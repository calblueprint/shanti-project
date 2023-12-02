/* eslint-disable */

import supabase from '../createClient';

export const handleSignUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(error);
};

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return data, error;
};

export const signOut = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log('hi');
  console.log(user);
  const { error } = await supabase.auth.signOut();
  console.log(user);
};
