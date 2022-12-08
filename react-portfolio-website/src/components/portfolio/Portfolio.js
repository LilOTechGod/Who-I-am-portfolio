import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Screenshot_20221123_023856.png'
import IMG2 from '../../assets/Screenshot_20221121_065216.png'
import IMG3 from '../../assets/Screenshot_20221123_023336.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>

      <article className='portfolio_item'>
          <h3>PlayDate</h3>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Playdate-The-App-for-Exhausted-Parents' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://lilotechgod.github.io/Playdate-The-App-for-Exhausted-Parents/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <h3>PlayDate</h3>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Playdate-The-App-for-Exhausted-Parents' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://lilotechgod.github.io/Playdate-The-App-for-Exhausted-Parents/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <h3>PlayDate</h3>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Playdate-The-App-for-Exhausted-Parents' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://lilotechgod.github.io/Playdate-The-App-for-Exhausted-Parents/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <h3>PlayDate</h3>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Playdate-The-App-for-Exhausted-Parents' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://lilotechgod.github.io/Playdate-The-App-for-Exhausted-Parents/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio