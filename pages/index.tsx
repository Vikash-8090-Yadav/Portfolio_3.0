import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import SocialLinks from '../components/SocialLinks'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className = "bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b]">
      <Hero />
      <SocialLinks />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
