import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Container, ButtonLink } from '@/components/ui'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Link } from '@/i18n/navigation'
import { getHeader } from '@/lib/payload'
import type { Locale } from '@/i18n/routing'

// Sticky header — official CIC logo, centred nav, language switcher, Enquire CTA.
export async function Header({ locale }: { locale: Locale }) {
  const [header, t] = await Promise.all([getHeader(locale), getTranslations('common')])
  const nav = (header?.nav || []) as { label?: string | null; href?: string | null }[]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-4 py-2">
        <Link href="/" className="flex items-center" aria-label="Cambridge International College — One World">
          <Image
            src="/logo-mark.png"
            alt="Cambridge International College"
            width={657}
            height={209}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-navy-900/[0.04] p-1 text-sm font-medium text-navy-900/70 lg:flex">
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.href || '#'}
              className="rounded-full px-4 py-1.5 transition-colors duration-150 hover:bg-navy-700 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ButtonLink href="#enquire" className="hidden sm:inline-flex">
            {header?.ctaLabel || t('enquire')}
          </ButtonLink>
        </div>
      </Container>
    </header>
  )
}
