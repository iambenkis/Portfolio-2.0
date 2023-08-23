'use client'
import { IoFastFood } from 'react-icons/io5'
import { BiMoneyWithdraw } from 'react-icons/bi'

export const projects = [
  {
    name: 'Budget-app-with-rails',
    description:
      'A mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what.',
    stacks: ['Ruby on Rails', 'Ruby', 'TailwindCSS', 'PostgreSQL'],
    live: 'https://github.com/iambenkis/Budget-app-with-rails',
    source: 'https://github.com/iambenkis/Budget-app-with-rails',
    icon: '<BiMoneyWithdraw />',
  },
  {
    name: 'Shiny-agency',
    description:
      'Shiny agency is a react based application that heps you to identify your needs and associate it with the developer who can meet that need for you.',
    stacks: ['React', 'Redux', 'CSS-in-JS', 'Rest API'],
    live: 'https://enchanting-centaur-48a8eb.netlify.app/',
    source: 'https://github.com',
    icon: '<BiMoneyWithdraw />',
  },
  {
    name: 'Math magicians',
    description:
      'This is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations and to Read a random math-related quote.',
    stacks: ['React', 'Redux', 'Css', 'Saas'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: '<BiMoneyWithdraw />',
  },
  {
    name: 'Space-X',
    description:
      'Using a real live data from the SpaceX API. Space-X is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    stacks: ['React', 'Redux', 'Rest API', 'Css ', 'Saas'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: '<BiMoneyWithdraw />',
  },
  {
    name: 'School-library',
    description:
      'In this project, I build a school library app. In this initial step, I implement the classes to represent students and teachers. Build with Ruby',
    stacks: ['Ruby', 'PostgreSQL'],
    live: 'https://github.com/iambenkis/School-library',
    source: 'https://github.com/iambenkis/School-library',
    icon: '<BiMoneyWithdraw />',
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
    icon: '<BiMoneyWithdraw />',
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    stacks: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: '<BiMoneyWithdraw />',
  },
  {
    name: 'More projects coming soon',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.',
    // stacks: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: '<BiMoneyWithdraw />',
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
            <BiMoneyWithdraw className="text-gray-500 dark:text-white text text-3xl mx-2 my-4" />
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
