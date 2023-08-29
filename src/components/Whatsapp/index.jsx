/* eslint-disable react/no-unescaped-entities */
export default function Whatsapp() {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 mx-5 md:mx-0 p-5 mt-10 border-blue-100 dark:border-gray-800 border rounded">
      <div>
        <div className="border-b-[1px]  pb-5">
          <h3 className="font-bold  text-[20px] tracking-tight text-black dark:text-white">
            Want to hire me as a fullstack developerr? Let's discuss.
          </h3>
          <p className="dark:text-white text-gray-600 pt-2">
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
          <p className="text-gray-600 dark:text-white">
            Drop in a message on email and I will get back to you.{' '}
          </p>
          <form action="https://formspree.io/f/xeqnbaww" method="POST">
            <div className="relative my-5">
              <div className="flex flex-col  sm:flex-row">
                <input
                  type="text"
                  autoComplete="name"
                  name="Name"
                  className="p-3 w-full mr-2  rounded dark:bg-gray-800 dark:text-white"
                  placeholder="benjamin kisenge"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  autoComplete="email"
                  className="p-3 w-full mt-2 sm:mt-0 rounded dark:bg-gray-800 dark:text-white"
                  placeholder="benkisenge03@gmail.com"
                  required
                />
              </div>
              <textarea
                className="w-full p-3 mt-2 rounded dark:bg-gray-800 dark:text-white"
                placeholder="Your message"
                name="Message"
                rows="2"
                cols="50"
              />
              <input
                type="submit"
                className="w-full bg-neutral-100 text-black rounded-lg px-7 py-[5.5px] cursor-pointer dark:bg-gray-700 dark:text-white"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
