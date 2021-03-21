import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="container m-0 mt-3">
                <div className="row ">
                     <div className="col-5"><Sidebar/> </div>
                     <div className="col-7">col-7</div>
 
                </div>
            </div>
        </>
    )
}
