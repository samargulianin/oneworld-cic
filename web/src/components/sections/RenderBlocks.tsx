import { Hero } from './Hero'
import { TrustStrip } from './TrustStrip'
import { StatsCallout } from './StatsCallout'
import { FieldsGrid } from './FieldsGrid'
import { Narrative } from './Narrative'
import { CTABanner } from './CTABanner'

// Maps Payload `layout` blocks to their React sections. Order is author-controlled
// in the CMS, so staff can reorder/add sections without code changes.
export async function RenderBlocks({ blocks }: { blocks?: any[] | null }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block, i) => {
        const key = `${block.blockType}-${i}`
        switch (block.blockType) {
          case 'hero':
            return <Hero key={key} {...block} />
          case 'trustStrip':
            return <TrustStrip key={key} {...block} />
          case 'statsCallout':
            return <StatsCallout key={key} {...block} />
          case 'fieldsGrid':
            return <FieldsGrid key={key} {...block} />
          case 'narrative':
            return <Narrative key={key} {...block} />
          case 'ctaBanner':
            return <CTABanner key={key} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
