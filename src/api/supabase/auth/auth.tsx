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
  console.log(data);
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};
