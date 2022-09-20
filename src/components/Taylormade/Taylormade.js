import { React, useState, useEffect } from 'react'
import { taylorMade } from '../../golfBallDB.js'
import uniqid from 'uniqid'

const Taylormade = () => {
  return (
    <section>
      <div className='ballList'>
        {taylorMade.map((ball) => (
          <div style={{ width: '16rem', height:'auto' }} key={uniqid()} className='ballList-item'>
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

export default Taylormade