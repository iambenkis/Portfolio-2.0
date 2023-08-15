/* eslint-disable react/no-unescaped-entities */
export default function Whatsapp() {
  return (
    <section className="bg-blue-50 p-5 mt-10 border-blue-100 border rounded-lg">
      <div>
        <div className="border-b-[1px]  pb-5">
          <h3 className="font-bold text-[20px] tracking-tight text-black dark:text-white">
            Want to hire me as a fullstack developerr? Let's discuss.
          </h3>
          <p className="text-gray-600">
            Drop your message and let's discuss about your project.
          </p>
          <a
            href="https://wa.me/250783865032?text=I want to work on a project with you"
            class="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
            type="submit"
            target="_blank"
          >
            Chat on WhatsApp
          </a>
        </div>
        <div className="mt-5">
          <p className="text-gray-600">
            Drop in your email ID and I will get back to you.{' '}
          </p>
          <div className="relative my-5">
            <input
              type="email"
              autoComplete="email"
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
