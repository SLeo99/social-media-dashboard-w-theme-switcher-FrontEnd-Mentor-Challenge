import React from 'react'

export default function DashBoardHeader({darkmode, themetoggle}) {

  return (
    <div className='toggle'>
      <span>Dark Mode</span>
      <div className={darkmode ? 'toggle__btn' : 'toggle__btn toggle__btn--active'} onClick={themetoggle}></div>
    </div>
  )
}