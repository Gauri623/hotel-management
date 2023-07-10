import React from "react"
import Cards from "./Card"
import "./Gallery.css"
import GalleryData from "./GalleryData"
import HeadTitle from "../common/HeadTitle/HeadTitle"

const Gallery = () => {
    return (
        <>
            <HeadTitle />

            <section className='gallery top'>
                <div className='container grid'>
                    {GalleryData.map((value, index) => {
                        return <Cards key={index} imgaes={value.img} title={value.title} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Gallery
