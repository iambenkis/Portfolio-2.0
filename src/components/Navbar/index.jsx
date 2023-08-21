'use client'
import { BiSolidMoon } from 'react-icons/bi'
import { MdOutlineLightMode } from 'react-icons/md'
import { useState } from 'react'
import NavLinks from '../NavLink'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'

export default function Navbar() {
  // const [theme, setTheme] = useState('light')
  const [show, setShow] = useState(false)
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark')
  //   } else {
  //     setTheme('light')
  //   }
  // }
  const { toggleTheme, theme } = useContext(ThemeContext)

  const toggleMenu = () => {
    setShow(!show)
    console.log(show)
  }

  // useEffect(() => {
  //   window.onclick = (event) => {
  //     console.log(event, 'bb')
  //     if (event.isTrusted && show === false) {
  //       setShow(true)
  //       console.log('jjjd')
  //     }
  //   }
  // }, [])
  return (
    <div
      className={`fixed z-20  flex items-center justify-between w-full px-7 sm:px-60 py-7 backdrop-blur-md bg-gray-100/50  dark:bg-gray-900`}
    >
      <div
        className=" cursor-pointer border px-4 py-2 border-solid border-[1px] border-[#b5b5b5] rounded-full shadow-lg mr-10"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <BiSolidMoon className="text-black dark:text-white" />
        ) : (
          <MdOutlineLightMode className="text-black dark:text-white" />
        )}
      </div>
      <div className="nav-bar">
        <NavLinks />
      </div>
      <div className="mobile-nav">
        <ul className="flex items-center">
          <li className="dark:text-white">
            <Link href="/" className="text-black">
              Home
            </Link>
          </li>
          <li className="mx-4 dark:text-white">
            <Link href="/projects" className="text-black">
              Projects
            </Link>
          </li>
          <li
            className="p-2 bg-gray-300 dark:bg-gray-700 rounder"
            onClick={toggleMenu}
          >
            {' '}
            <FiMenu className="text-black dark:text-white" />{' '}
          </li>
        </ul>
        <div
          className={`absolute ${
            !show ? 'hidden' : ''
          }  top-[5rem] left-[2.5%] w-[95%] rounded bg-neutral-100 dark:bg-gray-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
        >
          <ul className="px-2">
            <li className="py-4 border-t-0 font-bold px-4">
              <Link href="/blog" className="text-black dark:text-white">
                Blog
              </Link>
            </li>
            <li className="py-4 border-t font-bold px-4">
              <Link href="/about" className="text-black dark:text-white">
                About
              </Link>
            </li>
            <li className="py-4 border-t font-bold px-4">
              <Link href="/contact" className="text-black dark:text-white">
                Contact
              </Link>
            </li>
            <li className="py-4 border-t font-bold px-4">
              <Link href="/dashbord" className="text-black dark:text-white">
                Dashbord
              </Link>
            </li>
            <li className="py-4 border-t font-bold px-4">
              <Link href="/testimonies" className="text-black dark:text-white">
                Testimonies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// export default Navbar
