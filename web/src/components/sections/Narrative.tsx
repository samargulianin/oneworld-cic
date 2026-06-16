import { Container, PillLabel } from '@/components/ui'
import { MediaImage } from '@/components/MediaImage'

type NarrativeProps = {
  eyebrow?: string | null
  heading?: string | null
  body?: string | null
  ctaLabel?: string | null
  image?: any
  steps?: { title?: string | null; text?: string | null }[] | null
}

// "How distance learning works" — image + story + steps (PRD R4.4).
export function Narrative(props: NarrativeProps) {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative order-last overflow-hidden rounded-3xl border border-border lg:order-first">
          <MediaImage media={props.image} sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-cover" />
          {!props.image ? <div className="aspect-[4/3] w-full bg-gradient-to-br from-navy-700 to-navy-900" aria-hidden /> : null}
        </div>
        <div className="flex flex-col gap-6">
          {props.eyebrow ? <PillLabel tone="muted">{props.eyebrow}</PillLabel> : null}
          {props.heading ? (
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              {props.heading}
            </h2>
          ) : null}
          {props.body ? <p className="text-base text-muted">{props.body}</p> : null}
          {props.steps?.length ? (
            <ol className="mt-2 flex flex-col gap-4">
              {props.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-red-cta flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    {step.text ? <p className="mt-1 text-sm text-muted">{step.text}</p> : null}
                  </div>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
