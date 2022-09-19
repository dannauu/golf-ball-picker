import React from 'react'
import { callaway } from '../../golfBallDB.js'
import uniqid from 'uniqid'

const Callaway = () => {
  return (
    <section className='section skills'>
      <div className='ballList'>
        {callaway.map((ball) => (
          <div style={{ width: '18rem' }} key={uniqid()} className='ballList-item slit-in-vertical'>
            <div className='imgDiv'>
              <img variant="top" src={ball.imgSrc} className='ballImg' />
            </div>

            <div>
              <div className='centerText'>{ball.ballModel}</div>
              <div className='centerText ballDesc'>{ball.description}</div>
              <div>
                <button className='buyLink'><a href={ball.buyLink} target="_blank" rel="noopener noreferrer">Amazon</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Callaway