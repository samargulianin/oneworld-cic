'use client'

import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useTransition } from 'react'

const labels: Record<string, string> = { ka: 'ქარ', en: 'ENG' }

// Persistent language switcher (PRD R1.2). Preserves the current path across locales.
export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const params = useParams()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const switchTo = (next: string) => {
    if (next === locale) return
    startTransition(() => {
      // @ts-expect-error -- params are passed through for dynamic segments
      router.replace({ pathname, params }, { locale: next })
    })
  }

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-white p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale}
          disabled={isPending}
          className={
            'rounded-full px-3 py-1.5 transition ' +
            (l === locale ? 'bg-navy-cta text-white' : 'text-muted hover:text-ink')
          }
        >
          {labels[l] ?? l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
