import ProjectItems from '@/data/projects'
import { projects } from '@/data/projects'
import { UpcommingProjects } from '@/data/projects'
import { VscGithub } from 'react-icons/vsc'

const Project = () => {
  return (
    <div className="bg-neutral-100 px-80 py-10">
      <div className="pb-10 pt-10 mt-10">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h3>
        <h2 class="prose text-gray-500 dark:text-gray-400 mb-16">
          I ve meticulously curated a portfolio that mirrors my achievements and
          passions, spanning commercial ventures and deeper explorations,
          revealing my multifaceted development skills. Get in touch for Coffee
          Chat on{' '}
          <a class="font-bold text-black-500 hover:underline" href="/blog">
            here
          </a>{' '}
        </h2>
        <ProjectItems projects={projects} toDisplay={5} />
        <a
          type="button"
          class="flex w-[20%] px-5 py-3 justify-center items-center text-sm my-4 mx-auto px-4 py-[8px] border border-gray-300 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r from-blue-200/50 to-yellow-200/25 transition duration-500 hover-underlined"
          href="https://github.com/iambenkis"
          target="_blank"
        >
          See All at <VscGithub className="font-bold ml-2 text-xl " />
        </a>
      </div>
      <div className="mt-7">
        <h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Upcomming Projects
        </h3>
        <ProjectItems projects={UpcommingProjects} />
      </div>
    </div>
  )
}

export default Project