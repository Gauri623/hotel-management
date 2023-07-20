import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sdata from '../../Destination/Sdata'
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import EmptyFile from "../../common/EmptyFile/EmptyFile"
import BlogData from '../BlogData'
import "./BlogSingle.css"

function BlogSingle() {
    const { id } = useParams()
    const [item, setItem] = useState(null);
    const [buttonClick, setButtonClick] = useState(false)

    useEffect(() => {
        let item = BlogData.find((item) => item.id === +(id))
        if (item) {
            setItem(item)
        } else {
            console.log("item not found !");
        }
    }, [id])
    return (
        <div>
            <HeadTitle />
            {item ? (
                <section className='single-page top'>
                    <div className='container'>
                        <Link to='/blog' className='primary-btn back'>
                            <i className='fas fa-long-arrow-alt-left'></i> Go Back
                        </Link>

                        <article className='content flex'>
                            <div className='contentdiv'>
                                <div className='main-content'>
                                    <img src={item.cover} alt='' className='Blogimg' />
                                    <div className='category flex_space'>
                                        <span>{item.date}</span>
                                    </div>
                                </div>

                                <div className='sidecontent'>
                                    <div className='categorylist'>
                                        <h2>Category</h2>
                                        <span className='horizantalline'>-------------</span>
                                        <ul className='listtype'>
                                            {BlogData.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <i className="fa-regular fa-circle-play"></i>
                                                        {item.catgeory}
                                                    </li>
                                                )
                                            })
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className='head'>
                                <h1>{item.title}</h1>

                                <p className='parag'>
                                    {item.desc}</p>
                                <p>{item.desc}</p>
                            </div>
                        </article >
                    </div >
                </section >
            ) : (
                <EmptyFile />
            )
            }
        </div >
    )
}

export default BlogSingle
