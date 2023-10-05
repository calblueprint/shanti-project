import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project URL and API key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseApiKey = 'YOUR_SUPABASE_API_KEY';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseApiKey);

async function fetchRowById(tableName: string, id: number) {
  try {
    // Fetch the row with the specified ID from the table
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .single(); // Use single() to ensure only one row is returned

    if (error) {
      throw error;
    }

    // Check if data is null (no row found)
    if (!data) {
      console.log(`No row found in ${tableName} with ID ${id}`);
      return null;
    }

    // Process and use the fetched row
    console.log(`Fetched row from ${tableName} with ID ${id}:`, data);

    return data;
  } catch (error) {
    console.error(`Error fetching row from ${tableName} with ID ${id}:`, error.message);
    return null;
  }
}

// Example usage:
const tableName = 'your_table_name';
const rowId = 1; // Replace with the desired ID
fetchRowById(tableName, rowId);
