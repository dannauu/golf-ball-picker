import React from 'react'
import { bridgestone } from '../../golfBallDB.js'
import uniqid from 'uniqid'

const Bridgestone = () => {
  return (
    <section className='section skills'>
      <div className='ballList'>
        {bridgestone.map((ball) => (
          <div style={{ width: '18rem', height:'auto' }} key={uniqid()} className='ballList-item slit-in-vertical'>
            <div className='imgDiv'>
              <img variant="top" src={ball.imgSrc} className='ballImg' />
            </div>

            <div>
              <div className='centerText ballModel'>{ball.ballModel}</div>
              <div className='centerText ballDesc'>{ball.description}</div>
              <div>
                <button className='buyLink'><a href={ball.buyLink} target="_blank" rel="noopener noreferrer">Buy Now</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bridgestone