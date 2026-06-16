import Image from 'next/image'

type MediaDoc = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
} | string | number | null | undefined

// Renders a Payload media upload via next/image. Falls back gracefully when empty.
export function MediaImage({
  media,
  className,
  sizes,
  priority,
}: {
  media: MediaDoc
  className?: string
  sizes?: string
  priority?: boolean
}) {
  if (!media || typeof media !== 'object' || !media.url) return null
  return (
    <Image
      src={media.url}
      alt={media.alt || ''}
      width={media.width || 1200}
      height={media.height || 900}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  )
}
