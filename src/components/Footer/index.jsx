import { BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbTargetArrow } from 'react-icons/tb'

const footerObj = {
  pages: ['home', 'projects', 'blog', 'about'],
  addresses: ['GitHub', 'LinkedIn', 'Twitter', 'Instagram'],
  more: ['Dashboard', 'Testimonials', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="w-full px-80 py-10 pt-4 bg-neutral-100">
      <ul className="grid grid-cols-3 gap-4 flex justify-center text-gray-500 border-t-[1px]">
        <li>
          <ul>
            {footerObj.pages.map((page, index) => (
              <li key={index} className="py-2">
                <a
                  href={`/${page === 'home' ? '' : page}`}
                  className="capitalize"
                >
                  {page}{' '}
                </a>
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
