import { createClient } from '@supabase/supabase-js';
// no gitignore since sensitive keys arent shared

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,  // URL for Supabase
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // Anon Key for Supabase
  );