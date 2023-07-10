import React from 'react'
import Slide from '../HomeSection/Slide'
import Data from '../HomeSection/Data'

function Home() {
    return (
        <div>
            <Slide slides={Data} />
        </div>
    )
}

export default Home