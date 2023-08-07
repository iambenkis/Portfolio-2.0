import Image from 'next/image'
// import NavLinks from '@/components/NavLink'
import Navbar from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-60 py-10">
      <Navbar />
    </main>
  )
}
