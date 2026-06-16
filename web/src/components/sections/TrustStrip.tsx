import { Container } from '@/components/ui'

type TrustStripProps = {
  heading?: string | null
  items?: { label?: string | null }[] | null
}

// Accreditation / credibility row — the reference's "Trusted by" strip, repurposed.
export function TrustStrip(props: TrustStripProps) {
  if (!props.items?.length) return null
  return (
    <section className="border-y border-border bg-white py-8">
      <Container className="flex flex-col items-center gap-5">
        {props.heading ? (
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">{props.heading}</p>
        ) : null}
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {props.items.map((it, i) => (
            <li key={i} className="text-sm font-semibold text-ink/70">
              {it.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
