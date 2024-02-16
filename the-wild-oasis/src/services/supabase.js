
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://fudnhfrlejepvolvrabl.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZG5oZnJsZWplcHZvbHZyYWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NTM5NjMsImV4cCI6MjAyMzEyOTk2M30.F-07G0crWAhdg4__cKpSzpkm_ExBfaCBNFh4LlnfACM"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;