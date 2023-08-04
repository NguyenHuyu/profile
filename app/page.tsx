import Home from '@/components/HomeFragment/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Nguyễn Minh Huy',
  description: 'Nguyen Minh Huy - Web developer '
}

export default function HomePage() {
  return (
    <main className='w-full md:min-h-screen'>
      <Home />
    </main>
  )
}
