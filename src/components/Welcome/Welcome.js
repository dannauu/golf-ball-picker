import React from 'react'
import '../../App.css'
import Brands from '../Brands/Brands'

const Welcome = () => {
    return (
        <>
        <div className='welcomeMsg tracking-in-expand'>
            Choose a brand
        </div>
        <Brands /> 
        </>
        

    )
}

export default Welcome