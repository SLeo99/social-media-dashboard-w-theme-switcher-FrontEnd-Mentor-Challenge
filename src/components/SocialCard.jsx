import React from 'react'

export default function SocialCard({icon, user, number, chart, follows, followers, social, positive, darkmode}) {
  
  const cardClass = ['card'];
  let dinamicClass = [];
  
  if (social === 'Facebook') {
    dinamicClass = [...cardClass, 'card--facebook'].join(' ');
  } else if (social === 'Twitter') {
    dinamicClass = [...cardClass, 'card--twitter'].join(' ');
  } else if (social === 'Instagram') {
    dinamicClass = [...cardClass, 'card--instagram'].join(' ');
  } else if (social === 'Youtube') {
    dinamicClass = [...cardClass, 'card--youtube'].join(' ');
  }

  return (
    <div className={darkmode ? dinamicClass : [...dinamicClass, ' card--light'].join('')}>
      <div className={darkmode ? 'card__user' : 'card__user card__user--light'}>
        <img src={icon} alt="social-media-icon" />
        <p>{user}</p>
      </div>
      <div className={darkmode ? 'card__info' : 'card__info card__info--light'}>
        <span>{number}</span>
        <span>{followers}</span>
      </div>
      <div className={positive ? 'card__chart card__chart--positive' : 'card__chart card__chart--negative'}>
        <img src={chart} alt="statistic arrow" />
        <span>{follows}</span>
      </div>
    </div>
  )
}
