import { PostgrestSingleResponse, PostgrestError, createClient } from '@supabase/supabase-js';
import { User } from '../../types/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseApiKey = 'YOUR_SUPABASE_API_KEY';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseApiKey);



async function fetchData(): Promise<PostgrestSingleResponse<User[]> | { data: never[]; error: PostgrestError }>
{
  try {
    const { data: users, error } = await supabase
      .from('Users')
      .select('*')
      .single();

    if (error) {
      console.error('Error fetching data:', error);
      return { data: [], error };
    }
    return users;
  } catch (error) {
    console.error('Error:', error);
    throw error;

  }
}

async function fetchUserByUUID(uuid: string): Promise<PostgrestSingleResponse<any>> {
  try {
    const { data: user, error } = await supabase
      .from('Users')
      .select('*')
      .eq('user_id', uuid)
      .single();

    if (error) {
      console.error('Error fetching user data:', error);
    }

    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


// async function insertUser(userData: Omit<User, 'user_id'>): Promise<PostgrestSingleResponse<User>[] | null> {
//   try {
//     const { data, error } = await supabase
//       .from('Users')
//       .insert([userData])
//       .select();

//     if (error) {
//       console.error('Error inserting data:', error);
//       return null;
//     }

//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// }


async function addUserAddress(
  uuid: string,
  newStreet: string,
  newCity: string,
  newZipcode: string
): Promise<PostgrestSingleResponse<any>> {
  try {
    const { data: existingUser, error: selectError } = await supabase
      .from('Users')
      .select('street, city, zipcode')
      .eq('user_id', uuid)
      .single();

    if (selectError) {
      console.error('Error selecting user data:', selectError);
      throw selectError;
    }

    // Append new values to the arrays
    const updatedStreet = [...(existingUser?.street || []), newStreet];
    const updatedCity = [...(existingUser?.city || []), newCity];
    const updatedZipcode = [...(existingUser?.zipcode || []), newZipcode];

    const { data, error } = await supabase
      .from('Users')
      .update({ street: updatedStreet, city: updatedCity, zipcode: updatedZipcode })
      .eq('user_id', uuid)
      .single();

    if (error) {
      console.error('Error updating user data:', error);
      throw error;
    }

    return { data, error: null, status: 200, statusText: 'OK', count: 1 };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}