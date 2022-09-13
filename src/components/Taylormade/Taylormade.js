import React from 'react'
import { taylorMade } from '../../golfBallDB.js'
import uniqid from 'uniqid'

const Taylormade = () => {
  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {taylorMade.map((ball) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {ball}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Taylormade