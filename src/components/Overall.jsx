import StyledOverall from './styles/Overall.styled'
import Followers from './Followers'

const data = [
  {
    id: 1,
    social: 'facebook',
    account: '@nathanf',
    followers: 1987,
    tag: 'followers',
    today: 12,
    upDown: 'up'
  },
  {
    id: 2,
    social: 'twitter',
    account: '@nathanf',
    followers: 1044,
    tag: 'followers',
    today: 99,
    upDown: 'up'
  },
  {
    id: 3,
    social: 'instagram',
    account: '@realnathanf',
    followers: '11k',
    tag: 'followers',
    today: 1099,
    upDown: 'up'
  },
  {
    id: 4,
    social: 'youtube',
    account: 'Nathan F.',
    followers: '8239',
    tag: 'subscribers',
    today: 144,
    upDown: 'down'
  },
]

const Overall = () => (
  <StyledOverall>
    {data.map(item => (
      <Followers
        key={item.id}
        account={item.account}
        followers={item.followers}
        today={item.today}
        tag={item.tag}
        social={item.social}
        upDown={item.upDown}
      />
    ))}
  </StyledOverall>
)

export default Overall
