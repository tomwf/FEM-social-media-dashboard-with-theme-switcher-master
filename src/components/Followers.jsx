import Image from 'next/image'
import StyledFollowers from './styles/Followers.styled.js'
import iconUp from '../../public/images/icon-up.svg'
import iconDown from '../../public/images/icon-down.svg'
import facebook from '../../public/images/icon-facebook.svg'
import twitter from '../../public/images/icon-twitter.svg'
import instagram from '../../public/images/icon-instagram.svg'
import youtube from '../../public/images/icon-youtube.svg'

const Followers = ({
  social,
  upDown,
  account,
  followers,
  tag,
  today
}) => {
  const icon = {
    facebook: facebook,
    twitter: twitter,
    instagram: instagram,
    youtube: youtube
  }

  return (
    <StyledFollowers color={social} upDown={upDown}>
      <div className='container card'>
        <div>
          <div></div>
          <Image
            src={icon[social]}
            width={20}
            height={20}
            alt={`${social} icon`}
          />
          <a href="">{account}</a>
        </div>
        <div>
          <span>{followers}</span>
          <span>{tag.toUpperCase()}</span>
        </div>
        <div>
          <Image
            layout='fixed'
            src={upDown === 'up' ? iconUp : iconDown}
            alt={`${upDown} icon`}
          />
          <p className={upDown}><span>{today}</span> Today</p>
        </div>
      </div>
    </StyledFollowers>
  )
}

export default Followers
