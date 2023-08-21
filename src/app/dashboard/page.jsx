const accessToken = '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'
const query = `
{
        user(login: "iambenkis") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
`

function getContributions() {
  const apiUrl = 'https://api.github.com/graphql'
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(
        data.data.user.contributionsCollection.contributionCalendar
          .totalContributions,
      )
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
}

const fetchGithub = async (url) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const data = await res.json()
  console.log(data.length)
  return data
}

// https://api.github.com/user/followers
// https://api.github.com/user/repos
// https://api.github.com/user/starred

export default function Dashboard() {
  // getContributions()
  // fetchGithub('https://api.github.com/user/starred')
  // fetchGithub('https://api.github.com/user/repos')
  fetchGithub('https://api.github.com/user/followers')
  return (
    <div className="px-7 pt-10 pb-20 bg-neutral-100">
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
