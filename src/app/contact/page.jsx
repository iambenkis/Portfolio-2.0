import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedin, FaMedium } from 'react-icons/fa'
import { BiDownload } from 'react-icons/bi'
import Whatsapp from '../../components/Whatsapp'

const Contact = () => {
  return (
    <div className="px-5 text-[14px] pt-20 pb-10 bg-neutral-100 dark:bg-gray-900 sm:px-10 md:px-20 lg:px-80">
      <h2 className="mt-10 font-bold text-[#172b4d] text-2xl md:text-4xl mb-4 dark:text-white">
        Links
      </h2>
      <p className="text-[#172b4d] text-[15px] dark:text-gray-500">
        Links to all my socials, projects, source codes and memes.
      </p>
      <div className="px-0 md:px-5">
        <a
          href="https://github.com/iambenkis"
          target="_blank"
          className="bg-[#eeeeeea2] dark:bg-gray-900 my-4 px-2 md:px-4 py-2 rounded border-2 flex items-center"
        >
          <AiFillGithub className="mr-2 dark:text-white" />
          <p className="font-bold text-black dark:text-white">Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-kisenge/"
          target="_blank"
          className="bg-[#eeeeeea2] dark:bg-gray-900 my-4 px-2 md:px-4 py-2 rounded border-2 flex items-center"
        >
          <FaLinkedin className="mr-2 dark:text-white" />
          <p className="font-bold text-black dark:text-white">Linkedin</p>
        </a>
        <a
          href="https://twitter.com/iambenkis"
          target="_blank"
          className="bg-[#eeeeeea2] dark:bg-gray-900 my-4 px-2 md:px-4 py-2 rounded border-2 flex items-center"
        >
          <AiOutlineTwitter className="mr-2 text-blue-500" />
          <p className="font-bold text-black dark:text-white">Twitter</p>
        </a>
        <a
          href="https://medium.com/@benkisenge03"
          target="_blank"
          className="bg-[#eeeeeea2] dark:bg-gray-900 my-4 px-2 md:px-4 py-2 rounded border-2 flex items-center"
        >
          <FaMedium className="mr-2 dark:text-white" />
          <p className="font-bold text-black dark:text-white">Medium</p>
        </a>
        <a
          href="https://docs.google.com/document/d/15nKgCxs-z0-htEzjxQEuKUsEn6zFvfrHggQsAIudWoA/edit?usp=sharing"
          target="_blank"
          className="  bg-[#eeeeeea2] dark:bg-gray-900 my-4 px-2 md:px-4 py-2 rounded border-2 flex items-center "
        >
          <BiDownload className="mr-2 dark:text-white" />
          <p className="font-bold text-black dark:text-white">Dowload Resume</p>
        </a>
        <Whatsapp />
      </div>
    </div>
  )
}

export default Contact
