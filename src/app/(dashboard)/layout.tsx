import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getProfile } from '@/lib/auth'
import { DashboardNavbar } from '@/components/layout/DashboardNavbar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const profile = await getProfile()

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <DashboardNavbar profile={profile} />
      
      {/* Main Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}
