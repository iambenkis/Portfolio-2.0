/* eslint-disable react/no-unescaped-entities */
export default function Whatsapp() {
  return (
    <section className="bg-[#EEF9FE] p-5 rounded-lg">
      <div>
        <div className="border-b-[1px] pb-5">
          <h3 className="font-bold text-[20px] tracking-tight text-black dark:text-white">
            Want to hire me as a fullstack developerr? Let's discuss.
          </h3>
          <p className="text-gray-800">
            Drop your message and let's discuss about your project.
          </p>
          <button className="bg-green-400 w-full p-2 rounded-lg font-bold my-3">
            Chat on Whatsapp
          </button>
        </div>
        <div className="mt-5">
          <p className="text-gray-800">
            Drop in your email ID and I will get back to you.{' '}
          </p>
          <div className="relative my-5">
            <input
              type="text"
              className="p-3 w-full"
              placeholder="benkisenge03@gmail.com"
            />
            <input
              type="button"
              className="absolute right-4 top-[6px] bg-gray-100 rounded-lg px-10 py-[5px] cursor-pointer"
              value="Send"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
