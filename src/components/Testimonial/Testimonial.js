import React from 'react'
import HeadTitle from '../common/HeadTitle/HeadTitle'
import "./Testimonial.css"
import TestimonialCard from './TestimonialCard'
import Tdata from './Tdata'

const Testimonial = () => {
    return (
        <div>
            <HeadTitle />
            <div className="data-wrapper">
                {Tdata.map((item, index) => {
                    return <TestimonialCard allData={item}    key={index} />
                    
                })}
                
            </div>
        </div>
    )
}

export default Testimonial

