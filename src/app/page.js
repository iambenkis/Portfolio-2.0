import Image from 'next/image'
// import NavLinks from '@/components/NavLink'
import Navbar from '@/components/Navbar'
import Header from '@/pages/Home'
import Projects from '@/components/Projects'
import LifeUpdate from '@/components/LifeUpdate'
import Whatsapp from '@/components/Whatsapp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-100">
      <div className="px-80 pb-10 pt-5 mt-40">
        <Header />
        <Projects />
        <LifeUpdate />
        <Whatsapp />
      </div>
    </main>
  )
}
