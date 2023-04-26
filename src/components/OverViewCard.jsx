import React from 'react'

export default function OverViewCard({name, icon, number, statistic, arrow, positive, darkmode}) {
  return (
    <div className={darkmode ? 'overview__card' : 'overview__card overview__card--light'}>
      <div>
        <span>{name}</span>
        <img src={icon} alt="social-media-icon" />
      </div>
      <div>
        <span>{number}</span>
        <div>
          <img src={arrow} alt='statistic arrow'/>
          <span className={positive ? 'overview__card--positive' : 'overview__card--negative'}>{statistic}</span>
        </div>
      </div>
    </div>
  )
}
