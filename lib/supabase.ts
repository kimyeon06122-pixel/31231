import { createClient } from '@supabase/supabase-js'

// Use NEXT_PUBLIC_ env vars from Supabase integration (works in v0 environment)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_URL) || 
  ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) || 
  ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
