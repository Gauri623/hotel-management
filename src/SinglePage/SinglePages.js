import React, { useState, useEffect } from 'react'
import "./Singlepage.css"
import HeadTitle from '../components/common/HeadTitle/HeadTitle'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Sdata from '../components/Destination/Sdata'
import EmptyFile from '../components/common/EmptyFile/EmptyFile'

const SinglePages = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null);
    const [buttonClick, setButtonClick] = useState(false)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === +(id))
        if (item) {
            setItem(item)
        } else {
            console.log("item not found !");
        }
    }, [id])
    return (
        <>
            <HeadTitle />
            {item ? (
                <section className='single-page top'>
                    <div className='container'>
                        <Link to='/destination' className='primary-btn back'>
                            <i className='fas fa-long-arrow-alt-left'></i> Go Back
                        </Link>

                        <article className='content flex'>
                            <div className='main-content'>
                                {item ? <img src={item.image} alt='' /> : <h2>Not found</h2>}
                                <p>{item.desc}</p>
                                <p>{item.sidepara}</p>
                            </div>
                            <h1>What is the {item.title} City? </h1>
                            <p> {item.desc} </p>

                            <div className='image grid1'>
                                <img src={item.paraImage_one} alt="" />
                                <img src={item.paraImage_two} alt="" />
                            </div>
                            <p> {item.desc} </p>


                            <div className='side-content'>
                                <div className='box'>
                                    <h2>How can we help you?</h2>
                                    <p>{item.sidepara}</p>
                                    <button className='outline-btn'>
                                        <i className='fa fa-phone-alt'></i>
                                        Contact Us
                                    </button>
                                </div>

                                <div className='box2'>

                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            ) : (
                <EmptyFile />
            )}
        </>
    )
}

export default SinglePages
