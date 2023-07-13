import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sdata from '../../Destination/Sdata'
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import EmptyFile from "../../common/EmptyFile/EmptyFile"
import BlogData from '../BlogData'

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
                            <div className='main-content'>
                                <img src={item.cover} alt='' />
                                <div className='category flex_space'>
                                    <span>{item.date}</span>
                                    <label>{item.category}</label>
                                </div>
                            </div>
                            <div className='head'>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <p>{item.desc}</p>
                            </div>


                            <div className='side-content'>
                                <div className='category-list'>
                                    <h2>Category</h2>
                                    <hr />
                                    <ul>
                                        {BlogData.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <i i className='far-play-circle' ></i>
                                                    {item.catgeory}
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
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
