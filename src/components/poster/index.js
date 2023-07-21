import React from 'react'
import "./poster.css"

function PosterPage() {
    return (
        <>
            <div className='poster'>
                <div className='headline'>
                    <h1>Speak 5 lines to Yourself <br></br>Every Morning</h1>
                </div>

                <div className='boxes'>

                    <div className='line1'>
                        1. God is always with me.
                    </div>
                    <div className='line2'>
                        2. Today is my day.
                    </div>
                    <div className='line3'>
                        3. I am a Winner.
                    </div>
                    <div className='line4'>
                        4. I am the Best.
                    </div>
                    <div className='line5'>
                        5. I can do it.
                    </div>

                </div>
                <div className='name'>
                    <h4> A. P. J. Abdul Kalam</h4>
                </div>
                <div className='main'>
                    <img className='photo' src='/images/abdul-kalam.jpg' alt=''></img>
                </div>


            </div>


        </>
    )
}

export default PosterPage