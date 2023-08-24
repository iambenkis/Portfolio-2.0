const blogs = [
  {
    title: 'How to assess your quality code?',
    description:
      'Numerous, or at least all 😂 remote jobs, require a developer to be able to write high-quality code. Have you noticed that? But you may wonder:...',
    link: 'https://medium.com/@benkisenge03/how-to-assess-your-quality-code-76271440ceec',
  },
  {
    title: 'Should developers Critique in Public during meetings?',
    description:
      'Praise in public and critique in private when working as a team can help you to show your support, your consideration as well as your respect...',
    link: 'https://medium.com/@benkisenge03/should-developers-critique-in-public-during-meetings-c8e732ad06cd',
  },
  {
    title: 'Utilizing Context in React Using Hooks',
    description:
      'React introduced the Context API to solve the problem of sharing state among various nested components. However, using the Context API with…',
    link: 'https://medium.com/@benkisenge03/utilizing-context-in-react-using-hooks-9666c4ff929f',
  },
]

export default function Blog() {
  return (
    <div className="px-7 md:px-80 pt-20 pb-10 bg-neutral-100 dark:bg-gray-900">
      <h2 className="mt-10 font-bold text-[#172b4d] text-2xl md:text-4xl mb-4 dark:text-white">
        Articles I have written recently
      </h2>
      <div className="px-0 md:px-5">
        {blogs.map((blog) => (
          <div
            key={blog.description}
            className="bg-[#eeeeeea2] dark:bg-gray-900 my-4 px-2 md:px-4 py-2 rounded border"
          >
            <h2 className="font-bold text-black dark:text-white">
              {blog.title}
            </h2>
            <p className="text-gray-500">{blog.description}</p>
            <a
              href={blog.link}
              className="text-blue-600/50 dark:text-blue-500 italic"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
