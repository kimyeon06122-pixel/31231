import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Vercel/v0 Supabase integration provides these environment variables
const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''

// Only create client if credentials are available
let supabase: SupabaseClient | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
  console.log('[v0] Supabase client initialized successfully')
} else {
  console.warn('[v0] Supabase environment variables not found. Using fallback data.')
}

export { supabase }

// Database types
export interface CourseRow {
  id: string
  title: string
  teacher: string
  subject: string
  target: string
  schedule: string
  price: number
  current_students: number
  max_students: number
  is_closing_soon: boolean
  description: string
  created_at: string
}

export interface NoticeRow {
  id: string
  title: string
  date: string
  is_pinned: boolean
  category: string
  created_at: string
}
