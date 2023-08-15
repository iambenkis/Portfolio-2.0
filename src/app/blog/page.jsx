const blogs = [
  {
    title: 'Blog title',
    description:
      'The article outlines different approaches to debugging such as using documentation, Google, logging, testing, and static analysis/types and linters. ',
    link: 'https://blog.com',
  },
  {
    title: 'Blog title',
    description:
      'The article outlines different approaches to debugging such as using documentation, Google, logging, testing, and static analysis/types and linters. ',
    link: 'https://blog.com',
  },
  {
    title: 'Blog title',
    description:
      'The article outlines different approaches to debugging such as using documentation, Google, logging, testing, and static analysis/types and linters.',
    link: 'https://blog.com',
  },
]

export default function Blog() {
  return (
    <div className="px-80 pt-20 pb-10 bg-neutral-100">
      <h2 className="mt-10 font-bold text-[#172b4d] text-2xl md:text-4xl mb-4">
        Articles I have written recently
      </h2>
      <div className="px-5">
        {blogs.map((blog) => (
          <div
            key={blog.description}
            className="bg-[#eeeeeea2] my-4 px-4 py-2 rounded border"
          >
            <h2 className="font-bold">{blog.title}</h2>
            <p className="text-gray-500">{blog.description}</p>
            <a href={blog.link} className="text-blue-600/50 italic">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
