'use client'
import { BiSolidMoon } from 'react-icons/bi'
import { MdOutlineLightMode } from 'react-icons/md'
import { useState } from 'react'
import NavLinks from '../NavLink'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const [show, setShow] = useState(false)
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <div className="fixed z-20 flex items-center justify-between w-full px-7 sm:px-60 py-7 backdrop-blur-md bg-black/55 ">
      <div
        className=" cursor-pointer border px-4 py-2 border-solid border-[1px] border-[#b5b5b5] rounded-full shadow-lg mr-10"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <MdOutlineLightMode /> : <BiSolidMoon />}
      </div>
      <div className="nav-bar">
        <NavLinks />
      </div>
      <div className="mobile-nav">
        <ul className="flex items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-2 bg-gray-300 rounder">
            {' '}
            <FiMenu />{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

// export default Navbar
