import Image from 'next/image'
import benkisImage from '../../../public/assets/benkis-img.jpg'

export default function Header() {
  return (
    <div className="flex flex-col flex-col-reverse  justify-between w-full px-7 md:px-0 md:flex-row">
      <div className="mr-5">
        <h1 class="font-bold text-[#172b4d] text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Benjamin Kisege
        </h1>
        <p>
          Fullstack Web developer,{' '}
          <a href="https://www.microverse.org/" className="font-bold">
            Microverse Alumni
          </a>
          <></>
        </p>
        <p className="text-zinc-600 mt-4">
          I’m a{' '}
          <span className="bg-gray-200 px-1 py-[1px]">Fullstack developer</span>
          ! I can help you build a product, feature, or website. Find me on{' '}
          <a
            href="https://www.linkedin.com/in/benjamin-kisenge/"
            className="font-bold text-black-400"
          >
            Linkedin
          </a>{' '}
          for Coffee Chat.
        </p>
      </div>
      <div className="w-[180px] mt-[-30px] ml-5 p-2 rounded mb-4 md:w-[220px]">
        <Image
          src={benkisImage}
          alt="benkis"
          className="w-full object-contain rounded"
        />
      </div>
    </div>
  )
}
