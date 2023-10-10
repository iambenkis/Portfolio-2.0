import Header from '../pages/Home'
import Projects from '../components/Projects'
import LifeUpdate from '../components/LifeUpdate'
import Whatsapp from '../components/Whatsapp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-100 dark:bg-gray-900">
      <div className="sm:px-10 lg:px-80  pb-10 pt-5 mt-40">
        <Header />
        <Projects />
        <LifeUpdate />
        <div className="px-5">
          <Whatsapp />
        </div>
      </div>
    </main>
  )
}
