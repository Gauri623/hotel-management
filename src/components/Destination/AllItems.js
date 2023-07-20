import React, { useState } from "react"
import Dcards from "./Dcard"
import "../gallery/Gallery.css"
import "./Destination.css"
import Sdata from "./Sdata"
import Footer from "../Footer/Footer"

const AllItem = () => {
    const [items, setIems] = useState(Sdata)
    return (
        <>
            <section className='gallery desi mtop'>
                <div className='container'>
                    <div className='content grid'>
                        {items.map((item) => {
                            return <Dcards key={item.id} item={item} />
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AllItem
