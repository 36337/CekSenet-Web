import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

/**
 * Service Role Key ile Supabase Admin Client
 * 
 * DİKKAT: Bu client sadece server-side'da kullanılmalı!
 * Admin işlemleri için (kullanıcı oluşturma, silme vb.)
 */
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Supabase URL veya Service Role Key tanımlı değil')
  }

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
