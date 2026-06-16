import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Payload + Next 16 app router. Keep config portable across hosts.
  images: {
    // Local Payload media is served from /api/media/file/* — allow it.
    remotePatterns: [],
  },
}

export default withPayload(withNextIntl(nextConfig), { devBundleServerPackages: false })
