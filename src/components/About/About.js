import React from 'react'
import "./About.css"
import AboutCard from './AboutCard'
import HeadTitle from '../common/HeadTitle/HeadTitle'
import Footer from '../Footer/Footer'

function About() {
    return (
        <>
            <HeadTitle />
            <section className='about top'>
                <div className='container'>
                    <AboutCard />
                </div>
            </section>
            <Footer />


        </>
    )
}

export default About