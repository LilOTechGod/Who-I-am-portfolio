import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Screenshot_20221123_023856.png'
import IMG2 from '../../assets/project3.png'
import IMG3 from '../../assets/Screenshot_20221123_023336.png'
import IMG4 from '../../assets/Screenshot_20221219_030135.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>My Recent Work</h1>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>

      <article className='portfolio_item'>
          <h3>PlayDate App</h3>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Playdate-The-App-for-Exhausted-Parents' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://lilotechgod.github.io/Playdate-The-App-for-Exhausted-Parents/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <h3>Road to Utopia</h3>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Road-to-Utopia' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://the-survival-game.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <h3>Clash of Characters</h3>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Clash-of-Characters' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://clashofcharacters.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <h3>O's Tech Blog</h3>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt='' />
          </div>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/LilOTechGod/Tech-blog' className='btn' target='_blank'>GitHub Repo</a>
            <a href='https://oscars-tech-blog.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio