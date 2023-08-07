'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  let links = [
    {
      name: 'Home',
      link: '#home',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Ressources',
      link: '#ressources',
    },
    {
      name: 'Words',
      link: '#words',
    },
  ]

  return (
    <div className="flex space-x-4 px-4 justify-center border-solid border-[1px] border-[#b5b5b5] rounded-full shadow-lg">
      {links.map((navLink, index) => (
        <Link
          key={navLink.name}
          href={navLink.link}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative  px-4 py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 bg-[#f0f0f0]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <span className="relative z-10">{navLink.name}</span>
        </Link>
      ))}
    </div>
  )
}
