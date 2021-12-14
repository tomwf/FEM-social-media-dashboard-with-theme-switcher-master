import Image from 'next/image'
import StyledDetails from './styles/Details.styled'

import iconUp from '../../public/images/icon-up.svg'
import iconDown from '../../public/images/icon-down.svg'
import facebook from '../../public/images/icon-facebook.svg'
import twitter from '../../public/images/icon-twitter.svg'
import instagram from '../../public/images/icon-instagram.svg'
import youtube from '../../public/images/icon-youtube.svg'

import Subtitle from './Subtitle'

const Details = ({ title, social, figure, percent, upDown }) => {
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
          alt={`${social} icon`}
        />
      </div>
      <div>
        <span>{figure}</span>
        <div>
          <Image
            src={upDown === 'up' ? iconUp : iconDown}
            alt={`${upDown} icon`}
          />
          <span className={upDown}>{percent}%</span>
        </div>
      </div>
    </StyledDetails>
  )
}

export default Details
