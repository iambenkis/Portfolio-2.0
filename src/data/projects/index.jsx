'use client'
import { IoFastFood } from 'react-icons/io5'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { FaRocket } from 'react-icons/fa'
import { RiComputerLine } from 'react-icons/ri'
import { PiMathOperationsFill } from 'react-icons/pi'
import { IoLibrary } from 'react-icons/io5'

export const projects = [
  {
    name: 'Budget-app-with-rails',
    description:
      'A mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what.',
    stacks: ['Ruby on Rails', 'Ruby', 'TailwindCSS', 'PostgreSQL', 'jwt'],
    live: 'https://github.com/iambenkis/Budget-app-with-rails',
    source: 'https://github.com/iambenkis/Budget-app-with-rails',
    icon: 'BiMoneyWithdraw',
  },
  {
    name: 'Shiny-agency',
    description:
      'Shiny agency is a react based application that heps you to identify your needs and associate it with the developer who can meet that need for you.',
    stacks: ['React', 'Redux', 'CSS-in-JS', 'Rest API'],
    live: 'https://enchanting-centaur-48a8eb.netlify.app/',
    source: 'https://github.com',
    icon: 'RiComputerLine',
  },
  {
    name: 'Math magicians',
    description:
      'This is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations and to Read a random math-related quote.',
    stacks: ['React', 'Redux', 'Css', 'Saas'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: 'PiMathOperationsFill',
  },
  {
    name: 'Space-X',
    description:
      'Using a real live data from the SpaceX API. Space-X is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    stacks: ['React', 'Redux', 'Rest API', 'Css ', 'Saas'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: 'FaRocket',
  },
  {
    name: 'School-library',
    description:
      'In this project, I build a school library app. In this initial step, I implement the classes to represent students and teachers. Build with Ruby',
    stacks: ['Ruby', 'PostgreSQL'],
    live: 'https://github.com/iambenkis/School-library',
    source: 'https://github.com/iambenkis/School-library',
    icon: 'IoLibrary',
  },
]

export const UpcommingProjects = [
  {
    name: 'Betsalel ships',
    description:
      'A web application that offers a range of features designed to simify billing processes.',
    stacks: ['React', 'TailwindCSS', 'Redux', 'Node.js', 'Mongodb'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: 'BiMoneyWithdraw',
  },
  {
    name: 'University Management System',
    description:
      'An application that allows students to register for courses, view their grades, and view their schedule. It also allows professors to view their schedule and add grades for students.',
    stacks: ['React', 'Redux', 'TailwindCSS', 'Ruby on Rails', 'PostgreSQL'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: 'BiMoneyWithdraw',
  },
  {
    name: 'More projects coming soon',
    description:
      'I get ideas all day,  All of them are updated here as soon as I start working on them.',
    // stacks: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://google.com',
    source: 'https://github.com',
    icon: 'BiMoneyWithdraw',
  },
]

export default function ProjectItems(props) {
  const iconStyle = 'text-gray-500 dark:text-white text text-3xl mx-2 my-4'
  const iconMapping = {
    BiMoneyWithdraw: <BiMoneyWithdraw className={`${iconStyle}`} />,
    FaRocket: <FaRocket className={`${iconStyle}`} />,
    RiComputerLine: <RiComputerLine className={`${iconStyle}`} />,
    PiMathOperationsFill: <PiMathOperationsFill className={`${iconStyle}`} />,
    IoLibrary: <IoLibrary className={`${iconStyle}`} />,
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {props.projects.slice(0, props.toDisplay).map((project, index) => (
        <a
          key={index}
          href={project.live}
          target="_blaket"
          className="p-[.7px] text-[14px] bg-gradient-to-r from-blue-400/50 to-transparent rounded-xl shadow-lg  hover:bg-gradient-to-r from-blue-200/50 to-yellow-200/25 transition duration-500"
        >
          <div className="p-2 bg-neutral-100 dark:bg-gray-900 rounded-xl w-full h-full hover:bg-gradient-to-r from-blue-200/50 to-yellow-200/25 transition duration-500">
            {/* <BiMoneyWithdraw className="text-gray-500 dark:text-white text text-3xl mx-2 my-4" /> */}
            {iconMapping[project.icon] && iconMapping[project.icon]}
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
