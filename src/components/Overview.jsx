import StyledOverview from './styles/Overview.styled'
import Details from './Details'

const data = [
  {
    id: 1,
    title: 'Page Views',
    social: 'facebook',
    figure: 87,
    percent: 3,
    upDown: 'up'
  },
  {
    id: 2,
    title: 'Likes',
    social: 'facebook',
    figure: 52,
    percent: 2,
    upDown: 'down'
  },
  {
    id: 3,
    title: 'Likes',
    social: 'instagram',
    figure: 5462,
    percent: 2257,
    upDown: 'up'
  },
  {
    id: 4,
    title: 'Profile Views',
    social: 'instagram',
    figure: 52000,
    percent: 1375,
    upDown: 'up'
  },
  {
    id: 5,
    title: 'Retweets',
    social: 'twitter',
    figure: 117,
    percent: 303,
    upDown: 'up'
  },
  {
    id: 6,
    title: 'Likes',
    social: 'twitter',
    figure: 507,
    percent: 553,
    upDown: 'up'
  },
  {
    id: 7,
    title: 'Likes',
    social: 'youtube',
    figure: 107,
    percent: 19,
    upDown: 'down'
  },
  {
    id: 8,
    title: 'Total Views',
    social: 'youtube',
    figure: 1407,
    percent: 12,
    upDown: 'down'
  }
]

const Overview = () => (
  <StyledOverview>
    {data.map(item => (
      <Details
        className='card'
        key={item.id}
        title={item.title}
        social={item.social}
        figure={item.figure}
        percent={item.percent}
        upDown={item.upDown}
      />
    ))}
  </StyledOverview>
)

export default Overview
