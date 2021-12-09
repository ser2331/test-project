import React from "react";
import phone from "../../assets/images/tel.png";

import "./tutorials.scss";

const Tutorials = () => {
    return (
        <div className="Tutorials">
            <div className="Tutorials__inform-wrapper">
                <div className="title">Akita Inu Dog</div>

                <div className="inform">
                    Cum sociis natoque penatibus et magnis dis parturient montes,
                    <br/>nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                    <br/>consectetur adipiscing elit.Donec sed odio dui.Vivamus
                    <br/>sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </div>

                <div className="inform-btn">
                    <div className="btn">
                        <span id="blu">Fully Responsive Design </span>
                    </div>

                    <div className="btn">
                        <span id="blu">High Quality Code</span>
                    </div>

                    <div className="btn">
                        <span id="blu">Different Headers & Layout </span>
                    </div>
                </div>
            </div>

            <img src={phone} alt="background"/>
        </div>

    );
};

export default Tutorials;