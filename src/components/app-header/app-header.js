import React from "react";
import {Link} from "react-router-dom";
import Types from "../../classes/types";
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import skype from '../../assets/images/skype.png';
import inst from '../../assets/images/in.png';

import "./app-header.scss";

const {routingMap} = Types;

const AppHeader = () => {
    return (
        <div className="AppHeader">
            <div className="AppHeader__head">
                <div className="AppHeader__logo">CS</div>
                <nav className="AppHeader__nav">
                    <div className="home">
                        <Link to={routingMap.get('home').path}> Home </Link>
                    </div>

                    <div className="news">
                        <Link to={routingMap.get('pages').path}> Pages </Link>
                    </div>

                    <div className="profile">
                        <Link to={routingMap.get('features').path}> Features </Link>
                    </div>

                    <div className="login">
                        <Link to={routingMap.get('extensions').path}> Extensions </Link>
                    </div>
                    <div className="pages">
                        <Link to={routingMap.get('tutorials').path}> Tutorials </Link>
                    </div>
                    {/*<div className="pages">*/}
                    {/*    <Link to={routingMap.get('pages').path}> Contact us </Link>*/}
                    {/*</div>*/}
                </nav>
                <div className="AppHeader__social">
                    <Link to="https://ru-ru.facebook.com/" target="_blank">
                        <img src={facebook} alt="facebook"/>
                    </Link>

                    <Link to="https://twitter.com/?lang=ru" target="_blank">
                        <img src={twitter} alt="twitter"/>
                    </Link>

                    <Link to="https://www.skype.com/ru/" target="_blank">
                        <img src={skype} alt="skype"/>
                    </Link>

                    <Link to="https://www.instagram.com/?hl=ru" target="_blank">
                        <img src={inst} alt="in"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppHeader;