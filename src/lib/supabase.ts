import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Application {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message?: string;
  created_at?: string;
}
