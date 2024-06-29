import React from 'react'
import Hand from '../Assets/hand_icon.png'
import Heroicon from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'
import '../Hero/Hero.css'


const Hero = () => {
    return (
        <>

            <div className='hero'>
                <div className='hero-left'>
                    <h2>
                        NEW ARRIVALS ONLY
                    </h2>
                    <div>
                        <div className='hand-icon'>
                            <p>new </p>
                            <img src={Hand}/>
                        </div>
                        <p>
                            collections
                        </p>
                        <p>
                            for everyone
                        </p>
                        </div>
                        <div className='hero-latest-button'>
                            <div>latest collections</div>
                            <img src={arrow}/>
                        </div>
                    </div>
                    <div className='hero-right'>
                        <img src ={Heroicon}/>
                        
                    </div>
                    
                </div>

        </>
    )
}

export default Hero