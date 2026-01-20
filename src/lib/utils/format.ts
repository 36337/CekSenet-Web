// ============================================
// ÇekSenet Web - Dashboard Utility Functions
// ============================================

/**
 * Para tutarını formatla (₺1.234,56)
 */
export function formatCurrency(amount: number, currency: string = 'TRY'): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Kısa para formatı (₺1.2K, ₺3.5M)
 */
export function formatCurrencyShort(amount: number): string {
  if (amount >= 1_000_000) {
    return `₺${(amount / 1_000_000).toFixed(1)}M`
  }
  if (amount >= 1_000) {
    return `₺${(amount / 1_000).toFixed(1)}K`
  }
  return formatCurrency(amount)
}

/**
 * Tarihi formatla (26 Ara 2025)
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

/**
 * Tarihi kısa formatla (26 Ara)
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'short',
  }).format(date)
}

/**
 * Tarih ve saat formatla (26 Ara 2025, 14:30)
 */
export function formatDateTime(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

/**
 * Evrak durumu label'ı
 */
export function getDurumLabel(durum: string): string {
  const labels: Record<string, string> = {
    portfoy: 'Portföy',
    bankada: 'Bankada',
    ciro: 'Ciro Edildi',
    tahsil: 'Tahsil Edildi',
    karsiliksiz: 'Karşılıksız',
  }
  return labels[durum] || durum
}

/**
 * Evrak tipi label'ı
 */
export function getEvrakTipiLabel(tip: string): string {
  return tip === 'cek' ? 'Çek' : 'Senet'
}

/**
 * Durum badge rengi
 */
export function getDurumColor(durum: string): 'blue' | 'violet' | 'orange' | 'green' | 'red' | 'zinc' {
  const colors: Record<string, 'blue' | 'violet' | 'orange' | 'green' | 'red' | 'zinc'> = {
    portfoy: 'blue',
    bankada: 'violet',
    ciro: 'orange',
    tahsil: 'green',
    karsiliksiz: 'red',
  }
  return colors[durum] || 'zinc'
}
