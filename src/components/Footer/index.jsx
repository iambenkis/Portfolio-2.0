import { BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbTargetArrow } from 'react-icons/tb'
import Link from 'next/link'

const footerObj = {
  pages: ['home', 'projects', 'blog', 'about'],
  addresses: [
    {
      name: 'GitHub',
      link: 'https://www.github.com/iambenkis',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/benjamin-kisenge/',
    },
    {
      name: 'Twitter',
      link: 'https://www.twitter.com/iambenkis',
    },
    {
      name: 'Medium',
      link: 'https://www.medium.com/@iambenkis',
    },
  ],
  more: ['testimonials', , 'certificates', 'contact'],
}

export default function Footer() {
  return (
    <footer className="w-full px-10 py-5 bg-neutral-100  dark:bg-gray-900 sm:px-10 md:px-20 lg:px-80">
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 border-t-[1px] border-gray-300 dark:border-gray-300 gap-3 flex justify-center text-gray-500 pt-5">
        <li>
          <ul>
            {footerObj.pages.map((page, index) => (
              <li key={index} className="py-2">
                <Link
                  href={`/${page === 'home' ? '' : page}`}
                  className="capitalize"
                >
                  {page}{' '}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {footerObj.addresses.map((address, index) => (
              <li key={index} className="py-2">
                <Link target="_blank" href={address.link}>
                  {address.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {footerObj.more.map((more, index) => (
              <li key={index} className="py-2">
                {more === 'testimonials' ? (
                  <Link
                    className="capitalize"
                    target="_blank"
                    href="https://www.linkedin.com/in/benjamin-kisenge/details/recommendations/"
                  >
                    {more}
                  </Link>
                ) : (
                  <Link href={`/${more}`} className="capitalize">
                    {more}
                  </Link>
                )}
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
