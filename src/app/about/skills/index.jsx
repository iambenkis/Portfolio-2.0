'use client'
import { DiJavascript, DiRuby } from 'react-icons/di'
import { TbBrandCpp } from 'react-icons/tb'
import { useRouter } from 'next/navigation'

const about = ['DEVELOPMENT', 'DESIGN', 'TECH SOLUTIONS', 'DEVELOPMENT']

export default function Skills() {
  const routes = useRouter()

  console.log(routes)
  return (
    <div className="">
      <div>
        <h3 className="absolute origin-center rotate-90 underline  left-[16rem] mt-10 font-bold text-[#172b4d] text-sm mb-4 uppercase">
          what i do
        </h3>
        <div className="flex">
          <div className="w-[60%] mr-7">
            <h4 className="font-bold  text-[30px] mb-4 uppercase">
              MY MISSION IS <br />
              <span className="text-[#172b4d]">DESIGN & DEVELOP</span> THE BEST
              WEBSITES AROUND
            </h4>
            <p className="text-gray-400 text-justify">
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hesitate to contact me.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#172b4d] text-[15px] ">Languages</h4>
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
            <h4 className="font-bold text-[#172b4d] text-[15px]">
              Libraries && Frameworks && Tools
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
