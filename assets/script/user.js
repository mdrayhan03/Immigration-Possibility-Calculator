// Import Supabase client

// Initialize source and target Supabase clients
const sourceSupabase = supabase.createClient('https://aidjhvfvbyudzrzduwag.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZGpodmZ2Ynl1ZHpyemR1d2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NTQ4NDAsImV4cCI6MjAzOTEzMDg0MH0.A7otTKYyjRPA7bVxgcFotw7UswxmWJytnzddYcZyLk4');
const targetSupabase = supabase.createClient('https://jwyeljttuypuwqpcguib.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3eWVsanR0dXlwdXdxcGNndWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NDg1NDMsImV4cCI6MjA0MjMyNDU0M30.W4McGtOiT0CRuzdQXd16xfp1PRA0uceNvhQSNfSUVY8');

async function copyTable() {
  // Fetch data from the source table
  const { data: sourceData, error } = await sourceSupabase
    .from('tb_calculation')
    .select('*');

  if (error) {
    console.log('Error fetching data:', error);
    return;
  }

  // Insert data into the target table
  const { error: insertError } = await targetSupabase
    .from('tb_calculation')
    .insert(sourceData);

  if (insertError) {
    console.log('Error inserting data:', insertError);
  } else {
    console.log('Data copied successfully!');
  }
}

copyTable();