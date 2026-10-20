import { siteMarkup } from '@/src/main'
import SiteInitializer from './site-initializer'

export default function HomePage() {
  return (
    <>
      <div id="app" dangerouslySetInnerHTML={{ __html: siteMarkup }} />
      <SiteInitializer />
    </>
  )
}
