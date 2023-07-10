import React from 'react'
import "./About.css"
import AboutCard from './AboutCard'
import HeadTitle from '../common/HeadTitle/HeadTitle'

function About() {
    return (
        <>
            <HeadTitle />
            <section className='about top'>
                <div className='container'>
                    <AboutCard />
                </div>
            </section>


        </>
    )
}

export default About