import React from 'react'

const AboutCard = () => {
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <h4 className='About-Us'>About Us</h4>
                    <h1>
                        We <span>provide Solution</span> to grow your business
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur
                        adipiscing elit sed et eletum nulla eu placerat felis etiam
                        tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet
                        consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu
                        placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    <br></br>
                    <button className='secondary-btn'>
                        Explore More
                    </button>
                </div>
                <div className='shakehand'>
                    <img className='live' src='/images/handshake.jpg' alt='' />

                </div>
            </div>

        </>
    )
}

export default AboutCard
