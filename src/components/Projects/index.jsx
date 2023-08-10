import { projects } from '@/data/projects'
import { UpcommingProjects } from '@/data/projects'
import ProjectItems from '@/data/projects'

export default function Projects() {
  const toDisplay = 4
  return (
    <section className="mt-10">
      <div>
        <h3 className="font-bold text-[#172b4d] text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h3>
        <ProjectItems projects={projects} toDisplay={toDisplay} />
        <a
          type="button"
          class="flex justify-center items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          href="/projects"
        >
          See More
          <svg
            class="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </a>
      </div>
      <div className="mt-4">
        <h3 class="font-bold text-2xl text-[#172b4d] md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Upcomming Projects
        </h3>
        <ProjectItems projects={UpcommingProjects} />
      </div>
    </section>
  )
}
