import { About, Hero, Join, SiteFooter, Visit } from '@/components/home-sections'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Visit />
        <Join />
      </main>
      <SiteFooter />
    </>
  )
}
