'use client'
import { BiSolidMoon } from 'react-icons/bi'
import { MdOutlineLightMode } from 'react-icons/md'
import { useState } from 'react'
import NavLinks from '../NavLink'

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
    <div className="fixed flex items-center justify-between w-full px-60 py-7 backdrop-blur-md bg-black/55 ">
      <div
        className="cursor-pointer border px-4 py-2 border-solid border-[1px] border-[#b5b5b5] rounded-full shadow-lg mr-10"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <MdOutlineLightMode /> : <BiSolidMoon />}
      </div>
      <NavLinks />
    </div>
  )
}

// export default Navbar
