database_password: project_one1234@

policy:
-- Enable RLS on the table
ALTER TABLE public.tb_calculation ENABLE ROW LEVEL SECURITY;

-- Policy to allow insert operations
CREATE POLICY "Allow insert for anonymous users"
ON public.tb_calculation
FOR INSERT
WITH CHECK (true);

-- Policy to allow select operations
CREATE POLICY "Allow select for anonymous users"
ON public.tb_calculation
FOR SELECT
USING (true);
