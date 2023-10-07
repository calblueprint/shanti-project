// import { createClient } from '@supabase/supabase-js';

// // Replace these with your Supabase project URL and API key
// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseApiKey = 'YOUR_SUPABASE_API_KEY';

// // Initialize the Supabase client
// const supabase = createClient(supabaseUrl, supabaseApiKey);

// async function fetchRowById(tableName: string, id: number) {
//   try {
//     // Fetch the row with the specified ID from the table
//     const { data, error }: { data: any; error: Error } = await supabase
//       .from(tableName)
//       .select('*')
//       .eq('id', id)
//       .single(); // Use single() to ensure only one row is returned

//     if (error) {
//       throw error;
//     }

//     // Check if data is null (no row found)
//     if (!data) {
//       console.log(`No row found in ${tableName} with ID ${id}`);
//       return null;
//     }

//     // Process and use the fetched row
//     console.log(`Fetched row from ${tableName} with ID ${id}:`, data);

//     return data;
//   } catch (error) {
//     console.error(`Error fetching row from ${tableName} with ID ${id}:`, error.message);
//     return null;
//   }
// }

// async function addRowToTable(tableName: string, input: Record<string, any>): Promise<boolean> {
//   try {
//     // Insert the input data into the specified table
//     const { data, error } = await supabase
//       .from(tableName)
//       .insert([input]);

//     if (error) {
//       throw error;
//     }

//     // Check if the insert operation was successful
//     if (data && data.length > 0) {
//       console.log(`Successfully added a row to ${tableName}:`, data[0]);
//       return true;
//     } else {
//       console.log(`Failed to add a row to ${tableName}`);
//       return false;
//     }
//   } catch (error) {
//     console.error(`Error adding a row to ${tableName}:`, error.message);
//     return false;
//   }
// }

// const tableName = 'your_table_name';
// const rowId = 1; // Replace with the desired ID

// const input = {
//   // Replace with the properties and values you want to add to the table
//   column1: 'value1',
//   column2: 'value2',
// };

// addRowToTable(tableName, input).then((success) => {
//   if (success) {
//     console.log('Successfully added a row to the table');
//   } else {
//     console.log('Failed to add a row to the table');
//   }
// });

// // Example usage:



// fetchRowById(tableName, rowId);
