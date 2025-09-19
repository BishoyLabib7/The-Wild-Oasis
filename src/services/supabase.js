import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fmvgqsyajuuzdgvotgdm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtdmdxc3lhanV1emRndm90Z2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyOTA5MzYsImV4cCI6MjA3Mzg2NjkzNn0.dlx6jDAYgQyMbc5kN3ceBDPJwK8Tu1kgB2orygXysBc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
