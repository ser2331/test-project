import React from "react";
import clava1 from "../../assets/images/clava.png";
import clava2 from "../../assets/images/clava2.png";

import "./features.scss";

const Features = () => {
    return (
        <div className="Features">
            <div className="Features__left-block">
                <div className="Features__left">
                    <div className="Features__date" style={{color: "white"}}>Jan 4, 2016 | In Culture</div>
                    <div className="Features__title">Akita Inu Dog</div>
                    <p className="Features__inform inform-dec">Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                        <br/>
                        <br/>
                        Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit
                        amet, consectetur
                        adipiscing elit. Sed posuere consectetur</p>
                </div>
                <img className="Features__clava" src={clava1} alt="clava"/>
            </div>

            <div className="Features__right-block">
                <img className="Features__clava" src={clava2} alt="clava"/>
                <div className="Features__right">
                    <div className="Features__date" style={{color: "black"}}>Jan 4, 2016 | In Culture</div>
                    <div className="Features__title">Akita Inu Dog</div>
                    <p className="Features__inform inform-dec">
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                        <br/>
                        <br/>
                        Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                        sit amet, consectetur
                        adipiscing elit. Sed posuere consectetur
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Features;