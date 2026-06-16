import { Container, SectionHeading } from '@/components/ui'

type StatsCalloutProps = {
  eyebrow?: string | null
  heading?: string | null
  stats?: { value: string; label?: string | null }[] | null
}

// Credibility proof points (170+ / 19 fields / est. 1935).
export function StatsCallout(props: StatsCalloutProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        {(props.eyebrow || props.heading) && (
          <SectionHeading eyebrow={props.eyebrow} title={props.heading} />
        )}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {(props.stats || []).map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-paper px-6 py-8 text-center"
            >
              <div className="text-4xl font-extrabold text-red-600 sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
