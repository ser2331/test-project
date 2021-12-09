import React from "react";
import FakeData from "../../fake-data";

import "./extensions.scss";

const {extensionsData} = FakeData;


const Extensions = () => {
    return (
        <div className="Extensions">
            <div className="Extensions__fresh-content">
                <div className="B-logo">B</div>
                <div className="title">Let's blog</div>
                <div className="label">We love clean design and advanced digital solutions.</div>
            </div>

            <div className="Extensions__fresh-container">
                {extensionsData.map(({id, name, explanation, image}) => (
                        <div className="fresh" key={id}>
                            <div className="img-wrapper">
                                <img className="img-fresh" src={image} alt="fresh"/>
                            </div>
                            <div className="name">
                                {name}
                            </div>
                            <div className="explanation">
                                {explanation}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Extensions;