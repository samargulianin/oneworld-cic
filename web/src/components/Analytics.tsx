// Privacy-friendly analytics placeholder (PRD §7 Analytics). Loads only when a
// Plausible domain is configured — no cookies, no consent banner required.
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain) return null
  return <script defer data-domain={domain} src="https://plausible.io/js/script.js" />
}
