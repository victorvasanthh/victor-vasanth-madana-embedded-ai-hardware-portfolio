import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Publications } from '@/components/publications'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
