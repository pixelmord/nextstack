import { createClient } from '@supabase/supabase-js';

import { clientEnv } from '@/env/client';

const supabaseUrl = clientEnv.VITE_SUPABASE_URL;
const supabaseAnonKey = clientEnv.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
