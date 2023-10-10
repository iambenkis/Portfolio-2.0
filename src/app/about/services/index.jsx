const about = ['DEVELOPMENT', 'DESIGN', 'TECH SOLUTIONS', 'DEVELOPMENT']

export default function Services() {
  return (
    <div>
      <div className="">
        <h3 className="side-text hidden lg:block absolute origin-center rotate-90 underline  left-[15rem] mt-10 font-bold text-[#172b4d] dark:text-white text-sm mb-4 uppercase">
          what i offer
        </h3>
        <div>
          <div className="w-[100%] md:w-80">
            <h4 className="font-bold  text-[36px] mb-4 uppercase dark:text-white">
              I LIKE{' '}
              <span className="text-[#172b4d] dark:text-gray-500">TO MAKE</span>{' '}
              THINGS EASY AND FUN
            </h4>
            <ul>
              {about.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center my-2  cursor-pointer"
                >
                  <p className="text-gray-400 hover:text-[#172b4d] duration-700">
                    {`0${index + 1}. `}
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
