export const metadata = {
  title: 'Next Level',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
