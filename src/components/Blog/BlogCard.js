import React from 'react'
import { Link } from "react-router-dom"

const BlogCard = ({ item: { id, date, catgeory, title, cover, para, desc } }) => {
    console.log(id, "ID");
    return (
        <>
            <div className='items'>
                <div className='img'>
                    <img src={cover} alt='' />
                </div>
                <div className='catgeory flex_space'>
                    <span>{date}</span>
                    <label className='color'>{catgeory}</label>
                </div>

                <div className='details'>
                    <h3>{title}</h3>
                </div>

                <Link to={`/blogsingle/${id}`} className='blogItem-link'>
                    READ MORE <i className='fa fa-long-arrow-alt-right'></i>
                </Link>
            </div>
        </>
    )
}

export default BlogCard
