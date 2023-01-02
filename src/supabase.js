import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eneqnchgbdkxolkvvtxe.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZXFuY2hnYmRreG9sa3Z2dHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3ODI3OTIsImV4cCI6MTk4NzM1ODc5Mn0.rbLwYC34fi3LBB9mqUpLrAnsaAp-6u8IhJySQ_kfDgE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
