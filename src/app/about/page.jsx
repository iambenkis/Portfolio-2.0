'use client'
import Image from 'next/image'
import profile from '../../../public/assets/img-w.jpg'
import { BiDownload } from 'react-icons/bi'
import { useState } from 'react'
import Services from './services'
import Skills from './skills'

export default function About() {
  const [isActive, setIsActive] = useState(1)

  const toggleActive = (index) => {
    setIsActive(index)
  }

  return (
    <div className="px-80 pt-20 pb-10 bg-neutral-100 relative">
      <div className="">
        <div className="flex ">
          <h3
            className={`mt-10 font-bold ${
              isActive === 1 ? 'text-[#172b4d]' : 'text-[#172b4d]/25'
            } text-[16px] mb-4 mr-4 cursor-pointer`}
            onClick={() => toggleActive(1)}
          >
            Introduction
          </h3>
          <h3
            className={`mt-10 font-bold ${
              isActive === 2 ? 'text-[#172b4d]' : 'text-[#172b4d]/25'
            } text-[16px] mb-4 mr-4 cursor-pointer`}
            onClick={() => toggleActive(2)}
          >
            My services
          </h3>
          <h3
            className={`mt-10 font-bold ${
              isActive === 3 ? 'text-[#172b4d]' : 'text-[#172b4d]/25'
            } text-[16px] mb-4 mr-4 cursor-pointer`}
            onClick={() => toggleActive(3)}
          >
            My skills
          </h3>
        </div>
        {isActive === 1 ? (
          <div>
            <h3 className="absolute origin-center rotate-90 underline translate-y-4 left-[15rem] mt-10 font-bold text-[#172b4d] text-sm mb-4 uppercase">
              Introduction
            </h3>
            <div className="flex justify-between w-full px-10">
              <div className="w-60 h-80 bg-gray-500 rounded">
                <Image
                  alt="about-ben"
                  src={profile}
                  className="w-full h-full rounded"
                />
              </div>
              <div className="w-[50%]">
                <p className="pt-7 text-justify">
                  I have completed the Microverse Curriculum , an online
                  training school where I have been codind 8 hours a day
                  remotely with other developers and have learned the skills of
                  communication and teamwork
                </p>
                <div className="pt-5">
                  <div className="flex">
                    <div className="flex flex-col items-center ">
                      <h3 className="font-bold">01+</h3>
                      <p className="text-gray-400 text-center text-xs uppercase">
                        Years experience
                      </p>
                    </div>
                    <div className="flex flex-col items-center ">
                      <h3 className="font-bold">30+</h3>
                      <p className="text-gray-400 text-center text-xs uppercase">
                        Completed projects
                      </p>
                    </div>
                    <div className="flex flex-col items-center ">
                      <h3 className="font-bold ">01+</h3>
                      <p className="text-gray-400 text-center text-xs uppercase">
                        freelance development
                      </p>
                    </div>
                  </div>
                </div>
                <a className="cursor-pointer flex items-center text-[#fff] bg-[#172b4d]  px-2 py-2 rounded mt-5 w-[45%] text-center ">
                  Dowload CV <BiDownload className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        ) : isActive === 2 ? (
          <Services />
        ) : (
          <Skills />
        )}
      </div>

      <div className="px-5"></div>
    </div>
  )
}
