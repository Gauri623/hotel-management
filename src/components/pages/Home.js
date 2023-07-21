import React from 'react'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Home from '../home/Home'
import MostPopular from '../HomeSection/popular/MostPopular'
import Download from '../HomeSection/Download/Download'
import Works from '../HomeSection/Work/Works'
import Gallery from '../HomeSection/gallery/gallery'
import Footer from '../Footer/Footer'
import Download from './Download/Download'

function HomePage() {
    return (
        <>
            <HomePage />
            <HomeAbout />
            <MostPopular />
            <DestinationHome />
            <Download />

            <Works />
            <Gallery />
            <Footer />
        </>




    )
}

export default HomePage