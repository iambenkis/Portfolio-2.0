'use client'
import { BiSolidMoon } from 'react-icons/bi'
import { MdOutlineLightMode } from 'react-icons/md'
import { useState } from 'react'
import NavLinks from '../NavLink'

export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  console.log(theme)
  return (
    <div className="flex items-center justify-between w-full">
      <div
        className="cursor-pointer border px-4 py-2 border-solid border-[1px] border-[#b5b5b5] rounded-full shadow-lg"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <MdOutlineLightMode /> : <BiSolidMoon />}
      </div>
      <NavLinks />
    </div>
  )
}

// export default Navbar
