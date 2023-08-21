'use client'
import { IoFastFood } from 'react-icons/io5'

export const projects = [
  {
    name: 'React TailwindCSS Boilerplate',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: [
      'React',
      'Next.js',
      'TailwindCSS',
      'React',
      'Next.js',
      'TailwindCSS',
    ],
    live: 'https://google.com',
    source: 'https://github.com',
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://google.com',
    source: 'https://github.com',
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://google.com',
    source: 'https://github.com',
  },
  {
    name: 'React TailwindCSS Boilerplate',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: [
      'React',
      'Next.js',
      'TailwindCSS',
      'React',
      'Next.js',
      'TailwindCSS',
    ],
    live: 'https://google.com',
    source: 'https://github.com',
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: [
      'React',
      'Next.js',
      'TailwindCSS',
      'React',
      'Next.js',
      'TailwindCSS',
    ],
    live: 'https://google.com',
    source: 'https://github.com',
  },
]

export const UpcommingProjects = [
  {
    name: 'React TailwindCSS Boilerplate',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: [
      'React',
      'Next.js',
      'TailwindCSS',
      'React',
      'Next.js',
      'TailwindCSS',
    ],
    live: 'https://google.com',
    source: 'https://github.com',
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://google.com',
    source: 'https://github.com',
  },
  {
    name: 'More projects coming soon',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    // stacks: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://google.com',
    source: 'https://github.com',
  },
]

export default function ProjectItems(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {props.projects.slice(0, props.toDisplay).map((project, index) => (
        <a
          key={index}
          href={project.live}
          target="_blaket"
          className="p-[.7px] bg-gradient-to-r from-blue-400/50 to-transparent rounded-xl shadow-lg  hover:bg-gradient-to-r from-blue-200/50 to-yellow-200/25 transition duration-500"
        >
          <div className="p-2 bg-neutral-100 dark:bg-gray-900 rounded-xl w-full h-full hover:bg-gradient-to-r from-blue-200/50 to-yellow-200/25 transition duration-500">
            <IoFastFood className="text-gray-500 dark:text-white text text-3xl mx-2 my-4" />
            <h3 className="font-bold text-black dark:text-white">
              {project.name}
            </h3>
            <p className="text-gray-500 my-2 dark:text-white">
              {project.description}
            </p>
            <ul className="flex flex-wrap mt-4">
              {project.stacks &&
                project.stacks.map((stack, index) => (
                  <li
                    key={index}
                    className=" italic leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs bg-gray-200  mr-2 px-1"
                  >
                    {stack}
                  </li>
                ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  )
}
