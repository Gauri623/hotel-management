import React, { useState } from 'react'
import "./Testimonial.css"

function TestimonialCard({ allData }) {
    const [allTestimonialsData, setallTestimonialsData] = useState(allData);
    const { desc, name, post, profile } = allTestimonialsData
    return (
        <>
            <div className="testimonialCard">
                {/* lorem */}
                <i class="quote-icon fa-solid fa-quote-left"></i>
                <div className='description-data'>
                    {desc && desc}
                </div>
                {/* hr */}
                <hr className="devider-line" id="test" />

                {/* image div */}
                <div className="image-data">
                    {/* image */}
                    <img src={profile} alt="profile" />
                    {/* image data */}
                    <div className="text-data">
                        {/* heading */}
                        <h2>{name || ""}</h2>
                        {/* description */}
                        <span className="designation">{post ? post : ""}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard