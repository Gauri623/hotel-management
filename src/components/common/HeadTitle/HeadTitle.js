import React, { useState, useEffect } from 'react'
import "./HeadTitle.css"
import { useLocation, Link } from "react-router-dom"
import AllItem from '../../Destination/AllItems'
import Sdata from '../../Destination/Sdata'

const HeadTitle = () => {
    const location = useLocation()
    const pathname = location.pathname.split("/");
    const [countryName, setCountryName] = useState("");

    useEffect(() => {
        const result = pathname[2] ? Sdata.find((item) => item.id === +pathname[2]) : console.log("out")
        setCountryName(result?.title);
    }, [])

    return (
        <>
            <section className='image-heading'>
                <div className='container'>
                    {!pathname[2] ? <h1>{location.pathname.split("/")[1]}</h1> : <h1>{countryName}</h1>}
                    <button>
                        <Link to="/">Home / </Link>
                        <span>{pathname[1]}</span>

                        {pathname[2] && <>
                            <Link to="/"> / {AllItem.title}</Link>
                            <span>{countryName.replace(" ", "")}</span>
                        </>
                        }
                    </button>
                </div>
            </section>

        </>
    )
}

export default HeadTitle
