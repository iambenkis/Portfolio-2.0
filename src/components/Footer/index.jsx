import { BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbTargetArrow } from 'react-icons/tb'

const footerObj = {
  pages: ['Home', 'Blog', 'Dashboard', 'Projects', 'Links'],
  addresses: ['GitHub', 'LinkedIn', 'Twitter', 'Instagram', 'Freelancing'],
  more: ['About', 'Contact', 'Privacy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="mt-10 border-t-[1px] pt-5">
      <ul className="grid grid-cols-3 gap-4 flex justify-center text-gray-400">
        <li>
          <ul>
            {footerObj.pages.map((page, index) => (
              <li key={index} className="py-2">
                <a href="">{page} </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {footerObj.addresses.map((address, index) => (
              <li key={index} className="py-2">
                <a href="">{address}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {footerObj.more.map((more, index) => (
              <li key={index} className="py-2">
                <a>{more}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <div className="mt-10">
        <p className="text-gray-400 mt-5 flex items-center">
          Build with <TbBrandNextjs className="text-black text-3xl mx-2 " />
          <BiLogoTailwindCss className="text-blue-500 text-3xl mx-2" /> and{' '}
          <TbTargetArrow className="text-red-300 text-2xl mx-2" />
        </p>
      </div>
    </footer>
  )
}
