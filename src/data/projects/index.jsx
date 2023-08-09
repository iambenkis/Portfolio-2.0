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
    <div className="grid grid-cols-2 gap-4">
      {props.projects.map((project, index) => (
        <a
          key={index}
          href={project.live}
          target="_blaket"
          className="border-solid border-[1px] border-[#b5b5b5] rounded-xl shadow-lg p-4"
        >
          <IoFastFood className="text-black-300 text-3xl mx-2 my-4" />
          <h3 className="font-bold">{project.name}</h3>
          <p className="text-[#374151] my-2">{project.description}</p>
          <ul className="flex flex-wrap mt-4">
            {project.stacks &&
              project.stacks.map((stack, index) => (
                <li
                  key={index}
                  className=" italic leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs bg-gray-100  mr-2 px-1"
                >
                  {stack}
                </li>
              ))}
          </ul>
        </a>
      ))}
    </div>
  )
}
