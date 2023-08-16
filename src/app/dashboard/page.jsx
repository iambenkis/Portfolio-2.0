function requestUserRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`).then((data) =>
    console.log(data),
  )
}

export default function Dashboard() {
  requestUserRepos('iambenkis')
  return (
    <div className="px-80 pt-10 pb-20 bg-neutral-100">
      <h2 className="mt-20 font-bold text-[#172b4d] text-2xl md:text-4xl mb-4">
        Dashboard
      </h2>
      <p className="text-[#172b4d] text-[15px]">
        This dashboard is created with NextJS _api routes converted to
        serverless functions that tracks various metrics across platforms like
        GitHub, Twitter, Spotify and more 🚀.
      </p>
    </div>
  )
}
