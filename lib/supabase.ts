import { createClient } from '@supabase/supabase-js'

// Vercel/v0 Supabase integration provides these environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. Please connect Supabase integration.')
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
)

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
