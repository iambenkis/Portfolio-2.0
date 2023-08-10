'use client'
import { lifeupdates } from '@/data/lifeProgress'
import { BsPatchCheckFill } from 'react-icons/bs'

import { useState } from 'react'

export default function LifeUpdate() {
  const [show, setShow] = useState(false)
  const [toSlice, setToSlice] = useState(2)
  const handleShowMore = () => {
    setShow(!show)
    if (show) {
      setToSlice(2)
    } else {
      setToSlice(lifeupdates.length)
    }
  }

  return (
    <section className="mt-10">
      <div>
        <h3 className="font-bold text-[#172b4d] text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Life ChangeLog and Updates
        </h3>
        <ul>
          {lifeupdates.slice(0, toSlice).map((lifeupdate) => (
            <li
              key={lifeupdate.title}
              className="border-b-[1px] m-5 last:border-b-0"
            >
              <h3 className="font-bold text-sx mb-4">{lifeupdate.year}</h3>
              <span className="flex items-center mx-3 my-2">
                <BsPatchCheckFill className="text-blue-700 mr-2" />
                <h4 className="text-gray-900">{lifeupdate.title}</h4>
              </span>
              <p className="ml-9 text-gray-700 mb-5">
                {lifeupdate.description}
              </p>
            </li>
          ))}
        </ul>

        {show ? (
          ' '
        ) : (
          <p
            class="flex justify-center items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
            onClick={() => handleShowMore()}
          >
            Show more
            <svg
              className="h-4 w-4 ml-1"
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
          </p>
        )}
      </div>
    </section>
  )
}
