import Image from 'next/image'
import profile from '../../../public/assets/capture.jpg'
import html from '../../../public/assets/Capture-ht.jpg'
import ftd from '../../../public/assets/Capture-fs.jpg'
import capstone from '../../../public/assets/Capture-fc.jpg'
import ror from '../../../public/assets/Capture-ror.jpg'
import react from '../../../public/assets/Capture-react.jpg'
import javaScript from '../../../public/assets/Capture-js.jpg'

// https://www.credential.net/e82b9b24-565c-49b0-8659-4333ec62c704#gs.4zka86
const credentials = [
  {
    image: ftd,
    link: 'https://www.credential.net/d7b40fea-3003-441b-8a4e-e194580d9686#gs.4h6edc',
  },
  {
    image: capstone,
    link: 'https://www.credential.net/d9dc8fbb-f054-4054-b1ed-b63911ad0c5e#gs.4h6cou',
  },
  {
    image: ror,
    link: 'https://www.credential.net/b1c63bb6-0ffe-4136-9ec7-2fdb58ac2e68#gs.4h6dpx',
  },
  {
    image: profile,
    link: 'https://www.credential.net/e82b9b24-565c-49b0-8659-4333ec62c704#gs.4zka86',
  },
  {
    image: react,
    link: 'https://www.credential.net/18c5dfca-70ae-46e1-93ae-5bbbb8b383ba#gs.4h6eok',
  },
  {
    image: javaScript,
    link: 'https://www.credential.net/71eb75f3-a606-4d23-831e-1d928f37fea8#gs.4h6fgi',
  },
  {
    image: html,
    link: 'https://www.credential.net/09042709-67ba-4a93-afd3-bfd99b38bc49#gs.4h5kdu',
  },
]

const Certificates = () => {
  return (
    <div className="px-7 pt-20 pb-10 bg-neutral-100 dark:bg-gray-900 sm:px-10 md:px-20 lg:px-80">
      <h2 className="mt-10 font-bold text-[#172b4d] text-2xl md:text-4xl mb-4 dark:text-white">
        Here is my digital credentials from Microverse.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {credentials.map((credential, index) => (
          <a
            key={index}
            href={credential.link}
            target="_blaket"
            className="p-[.7px] bg-gradient-to-r from-blue-400/50 to-transparent rounded-xl shadow-lg  hover:bg-gradient-to-r from-blue-200/50 to-yellow-200/25 transition duration-500"
          >
            <div className="p-2 bg-neutral-100 dark:bg-gray-900 rounded-xl w-full h-full hover:bg-gradient-to-r from-blue-200/50 to-yellow-200/25 transition duration-500">
              <Image alt="cred-1" src={credential.image} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Certificates
