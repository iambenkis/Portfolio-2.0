import Image from 'next/image'
import benkisImage from '../../../public/assets/benkis-img.jpg'

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="mr-5">
        <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Benjamin Kisege
        </h1>
        <p>
          Fullstack Web developer,{' '}
          <a href="https://www.microverse.org/" className="font-bold">
            Microverse Alumni
          </a>
          <></>
        </p>
        <p className="text-zinc-500 mt-4">
          I’m a Fullstack developer! I can help you build a product, feature, or
          website. Find me on{' '}
          <a
            href="https://www.linkedin.com/in/benjamin-kisenge/"
            className="font-bold text-black-400"
          >
            Linkedin
          </a>{' '}
          for Coffee Chat.
        </p>
      </div>
      <div className="w-[220px] mt-[-30px] ml-5 p-2 border-t-[1px] border-r-[1px] border-[#b2b2b2]">
        <Image
          src={benkisImage}
          alt="benkis"
          className="w-full object-contain "
        />
      </div>
    </div>
  )
}
