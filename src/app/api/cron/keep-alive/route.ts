// ============================================
// CekSenet Web - Keep-Alive Cron Endpoint
// Her gün 08:00 UTC (11:00 TR) çalışır
// Supabase free tier'ın 7 gün inaktivite sonrası
// pause olmasını engeller
// ============================================

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  try {
    // Cron secret kontrolü (Vercel cron jobs için)
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET
    
    // Secret varsa kontrol et
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      console.log('Keep-alive: Unauthorized request')
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Supabase'e basit bir sorgu at (service role ile)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Keep-alive: Missing Supabase credentials')
      return NextResponse.json(
        { error: 'Configuration error' },
        { status: 500 }
      )
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    // Bankalar tablosundan count al (hafif sorgu)
    const { count, error } = await supabase
      .from('bankalar')
      .select('*', { count: 'exact', head: true })
    
    if (error) {
      console.error('Keep-alive: Database error', error)
      return NextResponse.json(
        { 
          status: 'error',
          message: error.message,
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      )
    }
    
    console.log(`Keep-alive: Success - ${count} bankalar`)
    
    return NextResponse.json({
      status: 'ok',
      message: 'Database is alive',
      bankalar_count: count,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Keep-alive: Unexpected error', error)
    return NextResponse.json(
      { 
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
