import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/about'
import Services from '@/components/services'


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Work />
    </main>
  )
}
