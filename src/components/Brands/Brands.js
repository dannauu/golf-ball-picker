import { render } from '@testing-library/react'
import { React, createElement, useState } from 'react'
import { srixon, vice, volvik, maxFli, taylorMade, wilsonStaff, kirkland, pinnacle, topFlite, bridgestone, titleist, callaway } from '../../golfBallDB.js'
import Taylormade from '../Taylormade/Taylormade.js'
import Titleist from '../Titleist/Titleist.js'
import Volvik from '../Volvik/Volvik.js'
import Callaway from '../Callaway/Callaway.js'
import Bridgestone from '../Bridgestone/Bridgestone.js'
import TopFlite from '../TopFlite/TopFlite.js'
import Pinnacle from '../Pinnacle/Pinnacle.js'
import Kirkland from '../Kirkland/Kirkland.js'
import WilsonStaff from '../WilsonStaff/WIlsonStaff.js'
import Maxfli from '../Maxfli/Maxfli.js'
import Vice from '../Vice/Vice.js'
import Srixon from '../Srixon/Srixon.js'


const Brands = () => {

    const [isVisible, setisVisible] = useState(true)
    const [backBtn, setbackBtn] = useState(false)
    const [comp, setComp] = useState('')
    const [test, setTest] = useState(false)

    return (
        <>
            <h1 className='centerText welcomeMsg bounce-top' style={{ display: isVisible ? "block" : "none" }}>Choose a brand</h1>
            <div className='brandBtnDiv' id='choices' style={{ display: isVisible ? "block" : "none" }}>
                <button className='Taylormade brandBtn' name='taylormade' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Callaway brandBtn' name='callaway' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Titleist brandBtn' name='titleist' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Bridgestone brandBtn' name='bridgestone' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='TopFlite brandBtn' name='topflite' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Pinnacle brandBtn' name='pinnacle' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Kirkland brandBtn' name='kirkland' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='WilsonStaff brandBtn' name='wilsonstaff' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Volvik brandBtn' name='volvik' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='MaxFli brandBtn' name='maxfli' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Vice brandBtn' name='vice' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
                <button className='Srixon brandBtn' name='srixon' onClick={(e) => { setComp(e.target.name); setisVisible(false); setbackBtn(true) }}></button>
            </div>
            <div className='backBtnDiv'>
                {test === true && (<Brands />)}
                <button className='backBtn' onClick={(e) => { window.location.reload(); setbackBtn() }} style={{ display: backBtn ? "block" : "none" }}>Choose Different Brand</button>
            </div>

            {(() => {

                switch (comp) {

                    case 'taylormade':
                        return (
                            <Taylormade />
                        )
                    case 'titleist':
                        return (
                            <Titleist />
                        )
                    case 'callaway':
                        return (
                            <Callaway />
                        )
                    case 'bridgestone':
                        return (
                            <Bridgestone />
                        )
                    case 'topflite':
                        return (
                            <TopFlite />
                        )
                    case 'pinnacle':
                        return (
                            <Pinnacle />
                        )
                    case 'kirkland':
                        return (
                            <Kirkland />
                        )
                    case 'wilsonstaff':
                        return (
                            <WilsonStaff />
                        )
                    case 'volvik':
                        return (
                            <Volvik />
                        )
                    case 'maxfli':
                        return (
                            <Maxfli />
                        )
                    case 'vice':
                        return (
                            <Vice />
                        )
                    case 'srixon':
                        return (
                            <Srixon />
                        )
                    case 'brands':
                        return (
                            <Brands />
                        )

                    default:
                        return (
                            null
                        )

                }
            })()}
        </>

    )
}

export default Brands

