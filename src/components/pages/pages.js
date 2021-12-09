import React from "react";
import FakeData from "../../fake-data";

import "./pages.scss"

const {pagesData} = FakeData;

const Pages = () => {
    return (
        <div className="Pages">
            <div className="Pages__content">
                <div className="w-logo">W</div>
                <div className="signature">We Are An Awesome Agency</div>
            </div>

            <div className="Pages__cards">
                {pagesData.map(({id, image, name, explanation}) => {
                    return (
                        <div className="card" key={id}>
                            <div className="F-logo">
                                <img className="ikons" src={image} alt="img"/>
                            </div>
                            <div className="name">{name}</div>
                            <div className="first-name">{explanation}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Pages;