import { useState } from 'react'

import DashBoardHeader from './components/DashBoardHeader'
import SocialCard from './components/SocialCard'
import fbIcon from './assets/icon-facebook.svg'
import instaIcon from './assets/icon-instagram.svg'
import twitterIcon from './assets/icon-twitter.svg'
import youtubeIcon from './assets/icon-youtube.svg'
import arrowUp from './assets/icon-up.svg'
import arrowDown from './assets/icon-down.svg'
import OverViewCard from './components/OverViewCard'

function App() {

  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
    theme ? setTheme(false) : setTheme(true);
  }

  return (
    <main className={theme ? 'App' : 'App App--light'}>
      <header className={theme ? 'header' : 'header header--light'}>
        <div className="header__container">
          <div className="header__title">
            <p>Social Media Dashboard</p>
            <span>Total Followers: 23,004</span>
          </div>
          <DashBoardHeader 
          darkmode={theme}
          themetoggle={changeTheme}/>
        </div>
      </header>
      <div className="cards-container">
        <SocialCard 
        icon={fbIcon}
        user={'@nathanf'}
        number={1987}
        chart={arrowUp}
        follows={'12 Today'}
        followers={'Followers'}
        social={'Facebook'}
        positive={true}
        darkmode={theme}
        />
        <SocialCard 
        icon={twitterIcon}
        user={'@nathanf'}
        number={1044}
        chart={arrowUp}
        follows={'99 Today'}
        followers={'Followers'}
        social={'Twitter'}
        positive={true}
        darkmode={theme}
        />
        <SocialCard 
        icon={instaIcon}
        user={'@realnathanf'}
        number={'11k'}
        chart={arrowUp}
        follows={'1099 Today'}
        followers={'Followers'}
        social={'Instagram'}
        positive={true}
        darkmode={theme}
        />
        <SocialCard 
        icon={youtubeIcon}
        user={'Nathan F.'}
        number={8239}
        chart={arrowDown}
        follows={'144 Today'}
        followers={'Subscribers'}
        social={'Youtube'}
        positive={false}
        darkmode={theme}
        />
      </div>
      <div className={theme ? "overview" : 'overview overview--light'}>
        <h2>Overview - Today</h2>
        <div className="overview__grid">
          <OverViewCard 
          name={'Page Views'}
          icon={fbIcon}
          number={87}
          statistic={'3%'}
          arrow={arrowUp}
          positive={true}
          darkmode={theme}
          />
          <OverViewCard 
          name={'Likes'}
          icon={fbIcon}
          number={52}
          statistic={'2%'}
          arrow={arrowDown}
          positive={false}
          darkmode={theme}
          />
          <OverViewCard 
          name={'Likes'}
          icon={instaIcon}
          number={5462}
          statistic={'2257%'}
          arrow={arrowUp}
          positive={true}
          darkmode={theme}
          />
          <OverViewCard 
          name={'Profile Views'}
          icon={instaIcon}
          number={'52k'}
          statistic={'1375%'}
          arrow={arrowUp}
          positive={true}
          darkmode={theme}
          />
          <OverViewCard 
          name={'Retweets'}
          icon={twitterIcon}
          number={117}
          statistic={'303%'}
          arrow={arrowUp}
          positive={true}
          darkmode={theme}
          />
          <OverViewCard 
          name={'Likes'}
          icon={twitterIcon}
          number={507}
          statistic={'533%'}
          arrow={arrowUp}
          positive={true}
          darkmode={theme}
          />
          <OverViewCard 
          name={'Likes'}
          icon={youtubeIcon}
          number={107}
          statistic={'19%'}
          arrow={arrowDown}
          positive={false}
          darkmode={theme}
          />
          <OverViewCard 
          name={'Total Views'}
          icon={youtubeIcon}
          number={1407}
          statistic={'12%'}
          arrow={arrowDown}
          positive={false}
          darkmode={theme}
          />
        </div>
      </div>
    </main>
  )
}

export default App
