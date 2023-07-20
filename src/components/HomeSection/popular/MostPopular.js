import React from 'react'
import Cards from './Card'
import './MostPopular.css'

const MostPopular = () => {
    return (
        <>
            <section className='popular top'>

                <div className='full container'>
                    <div className='heading'>
                        <h1>Most Popular Hotel</h1>
                        <div className='divdot'>
                            <div className='dots'></div>
                            <span className='dotline'>--------------------------</span>
                            <div className='dots'></div>
                        </div>
                    </div>

                    <div className='content'>
                        <Cards />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MostPopular
