import { createClient } from '@supabase/supabase-js'

// Vercel/v0 Supabase integration provides these environment variables
const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''

console.log('[v0] Supabase URL:', supabaseUrl ? 'Set' : 'Not set')
console.log('[v0] Supabase Anon Key:', supabaseAnonKey ? 'Set' : 'Not set')

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[v0] Supabase environment variables not found. Please connect Supabase integration.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
