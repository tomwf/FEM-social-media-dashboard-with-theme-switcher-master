import Image from 'next/image'
import StyledDetails from './styles/Details.styled'

import iconUp from '../../public/images/icon-up.svg'
import iconDown from '../../public/images/icon-down.svg'
import facebook from '../../public/images/icon-facebook.svg'
import twitter from '../../public/images/icon-twitter.svg'
import instagram from '../../public/images/icon-instagram.svg'
import youtube from '../../public/images/icon-youtube.svg'

import Subtitle from './Subtitle'

const Details = ({ title, social, figure, percent, updown }) => {
  const icon = {
    facebook: facebook,
    twitter: twitter,
    instagram: instagram,
    youtube: youtube
  }

  return (
    <StyledDetails className='card'>
      <div>
        <Subtitle text={title} />
        <Image
          src={icon[social]}
        />
      </div>
      <div>
        <span>{figure}</span>
        <div>
          <Image
            src={updown === 'up' ? iconUp : iconDown}
          />
          <span className={updown}>{percent}%</span>
        </div>
      </div>
    </StyledDetails>
  )
}

export default Details
