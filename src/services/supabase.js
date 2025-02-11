import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sshbeyhvlcntuowhmfyb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzaGJleWh2bGNudHVvd2htZnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NTUxMzgsImV4cCI6MjA1MzIzMTEzOH0.1eHfp1ESaNcjJqyIFrpHGW4zlCFUaEQ9QtaTVThk6l8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
