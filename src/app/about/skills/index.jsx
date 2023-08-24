'use client'
import { DiJavascript, DiRuby } from 'react-icons/di'
import { TbBrandCpp } from 'react-icons/tb'

export default function Skills() {
  return (
    <div className="">
      <div>
        <h3 className="side-text absolute origin-center rotate-90 underline dark:text-white  left-[16rem] mt-10 font-bold text-[#172b4d] text-sm mb-4 uppercase">
          what i do
        </h3>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[60%] w-full mr-7 ">
            <h4 className="font-bold  text-[30px] mb-4 uppercase dark:text-gray-500 ">
              MY MISSION IS
              <span className="text-[#172b4d] dark:text-white">
                {' '}
                DESIGN & DEVELOP
              </span>{' '}
              THE BEST WEBSITES AROUND
            </h4>
            <p className="text-gray-400 text-justify mt-4 md:mt-0">
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hesitate to contact me.
            </p>
          </div>
          <div>
            <h4 className="font-bold pt-2 text-[#172b4d] text-[15px] dark:text-white">
              Languages
            </h4>
            <ul className="flex w-full mt-3 mb-4">
              <li className="bg-gray-500/25 rounded border w-[50px] h-[50px] flex justify-center items-center mr-3">
                <DiRuby className="text-red-600 text-2xl" />
              </li>
              <li className="bg-gray-500/25 rounded border w-[50px] h-[50px] flex justify-center items-center mr-3">
                <DiJavascript className="text-yellow-400 text-2xl" />
              </li>
              <li className="bg-gray-500/25 rounded border w-[50px] h-[50px] flex justify-center items-center mr-3">
                <TbBrandCpp className="text-blue-600 text-2xl" />
              </li>
            </ul>
            <h4 className="font-bold text-[#172b4d] text-[15px] dark:text-white">
              Libraries && Frameworks && Tools.
            </h4>
            <ul className="flex w-full mt-3 mb-4 p-1">
              <li className="bg-gray-500/25 rounded border w-[50px] h-[50px] flex justify-center items-center mr-3">
                <DiRuby className="text-red-600 text-2xl" />
              </li>
              <li className="bg-gray-500/25 rounded border w-[50px] h-[50px] flex justify-center items-center mr-3">
                <DiJavascript className="text-yellow-400 text-2xl" />
              </li>
              <li className="bg-gray-500/25 rounded border w-[50px] h-[50px] flex justify-center items-center mr-3">
                <TbBrandCpp className="text-blue-600 text-2xl" />
              </li>
              <li className="bg-gray-500/25 rounded border w-[50px] h-[50px] flex justify-center items-center mr-3">
                <DiJavascript className="text-yellow-400 text-2xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5"></div>
    </div>
  )
}
