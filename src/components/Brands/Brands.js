import { render } from '@testing-library/react'
import React from 'react'
import { srixon, vice, volvik, maxFli, taylorMade, wilsonStaff, kirkland, pinnacle, topFlite, bridgestone, titleist, callaway} from '../../golfBallDB.js'
import Taylormade from '../Taylormade/Taylormade.js'

const Brands = () => {

    

    function showBalls(e) {
        const option = e.target.name
        switch (option) {
            case 'taylormade':
                clearDOM()
                const balls = document.getElementById('golfballs')
                return <Taylormade />
            case 'callaway':

                break
            case 'titleist':

                break
            case 'bridgestone':

                break
            case 'topflite':

                break
            case 'pinnacle':

                break
            case 'kirkland':

                break
            case 'wilsonstaff':

                break
            case 'volvik':

                break
            case 'maxfli':

                break
            case 'vice':

                break
            case 'srixon':

                break


        }
    }

    function clearDOM() {
        const golfBallChoices = document.getElementById('choices')
        golfBallChoices.classList.add('hide')
        return <Taylormade />
    }

    return (
        <div className='brandBtnDiv' id='choices'>
            <button className='Taylormade brandBtn' name='taylormade' onClick={(e) => showBalls(e)}></button>
            <button className='Callaway brandBtn' name='callaway' onClick={(e) => showBalls(e)}></button>
            <button className='Titleist brandBtn' name='titleist' onClick={(e) => showBalls(e)}></button>
            <button className='Bridgestone brandBtn' name='bridgestone' onClick={(e) => showBalls(e)}></button>
            <button className='TopFlite brandBtn' name='topflite' onClick={(e) => showBalls(e)}></button>
            <button className='Pinnacle brandBtn' name='pinnacle' onClick={(e) => showBalls(e)}></button>
            <button className='Kirkland brandBtn' name='kirkland' onClick={(e) => showBalls(e)}></button>
            <button className='WilsonStaff brandBtn' name='wilsonstaff' onClick={(e) => showBalls(e)}></button>
            <button className='Volvik brandBtn' name='volvik' onClick={(e) => showBalls(e)}></button>
            <button className='MaxFli brandBtn' name='maxfli' onClick={(e) => showBalls(e)}></button>
            <button className='Vice brandBtn' name='vice' onClick={(e) => showBalls(e)}></button>
            <button className='Srixon brandBtn' name='srixon' onClick={(e) => showBalls(e)}></button>
            <div id='golfballs' className='brandBtnDiv'>{}</div>
        </div>
    )
}

export default Brands

