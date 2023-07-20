import React, { useState } from 'react'
import "./Home.css"
import MostPopular from './popular/MostPopular'
import About from '../About/About'
import AllItem from '../Destination/AllItems'
import Download from './Download/Download'
import Works from '../HomeSection/Work/Works'
import Gallery from '../HomeSection/gallery/gallery'
import Footer from '../Footer/Footer'

const Slide = ({ slides }) => {
    const [current, setcurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setcurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setcurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <>

            <section className="slider">
                <div className='control-btn'>
                    <button className='prev' onClick={prevSlide}>
                        <i className='fas fa-caret-left'></i>
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <i className='fas fa-caret-right'></i>
                    </button>
                </div>


                {slides.map((slide, index) => {
                    const { images } = slide
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && <img src={`/images/${images}`} alt='Home Image' style={{ height: "730px", width: "1865px" }} />}
                        </div >
                    )
                })}
            </section>


            <MostPopular />
            <div className='destination-wrapper'>
                <h2>Most Popular Destination</h2>
                <div className='new'>
                    <div className='dots'></div>
                    <span className='dotline'> ----------------------------</span>
                    <div className='dots'></div>
                </div>
            </div>
            <AllItem />


            <section className='slide-form'>

                <div className='container'>
                    <form action=''>
                        <h2> Enjoy your Holiday </h2>
                        <span>Search and Book Hotel</span>


                        <input type='text' placeholder='Search City' name='' id='' />
                        <div className='flex_space'>
                            <input type='date' placeholder='Check In' />
                            <input type='date' placeholder='Check Out' />
                        </div>
                        <div className='flex_space'>
                            <input type='number' placeholder='Adults(18+)' min='18' max='80' required />
                            <input type='number' placeholder='Children(0 - 17)' min='0' max='17' required />
                        </div>
                        <input type='number' placeholder='Rooms' min='0' max='17' required />
                        <input type='submit' value='Search' className='submit' />

                    </form>
                </div>
            </section>

            <Download />
            <Works />
            <Gallery />
            <Footer />


        </>
    )
}

export default Slide
