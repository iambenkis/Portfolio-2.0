import Image from 'next/image'
// import NavLinks from '@/components/NavLink'
import Navbar from '@/components/Navbar'
import Header from '@/pages/Home'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="px-80 py-10">
        <Header />
      </div>
    </main>
  )
}
