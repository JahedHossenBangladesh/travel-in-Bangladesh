import React from 'react';
import Nav from '../Map/Nav/Nav';
import './HomeDescription.css';
const HomeDescription = () => {
    return (
        <>
            <Nav/>
            <div className="containerImg">
                <div className="img1 ml-1">
                    <h1>This is one</h1>
                </div>
                <div className="img2 ml-1">
<h1>this two</h1>
                </div>
            </div>
        </>
    );
};

export default HomeDescription;