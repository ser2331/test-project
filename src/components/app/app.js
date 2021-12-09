import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as _ from 'lodash';
import {Route, useLocation, useNavigate, Routes, Link} from 'react-router-dom';
import Home from "../home";
import AppHeader from "../app-header";
import AppFooter from "../app-footer";
import Pages from "../pages";
import Features from "../features";
import Extensions from "../extensions";
import Tutorials from "../tutorials";
import {app as appActions} from '../../store/actions';
import Types from "../../classes/types";
import scrollDown from "../../assets/images/down.png";

import './app.scss';

const {routingMap, appSizesMap} = Types;

const App = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const getSizeKey = () => {
            const size = document.documentElement.clientWidth;
            if (size < appSizesMap.get('mobile').size) return null;
            if (size >= appSizesMap.get('large').size) return appSizesMap.get('large').key;
            if (size >= appSizesMap.get('desktop').size) return appSizesMap.get('desktop').key;
            if (size >= appSizesMap.get('tablet').size) return appSizesMap.get('tablet').key;
            if (size < appSizesMap.get('tablet').size) return appSizesMap.get('mobile').key;
            return appSizesMap.get('desktop').key;
        };

        const onResize = () => {
            const sizeKey = getSizeKey();
            const {pathname} = location;
            const plugPath = routingMap.get('plug').path;
            const homePath = routingMap.get('home').path;

            if (!sizeKey && (pathname !== plugPath)) history.push(plugPath);
            if (sizeKey && (pathname === plugPath)) history.push(homePath);
            dispatch(appActions.setSize(sizeKey));
        };

        onResize();
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, [history, dispatch, location]);

    const appSize = useSelector((state) => _.get(state, 'app.appSize'));
    const isMobile = appSize === 'mobile';
    // const isTablet = appSize === 'tablet';
    // const isDesktop = appSize === 'desktop';
    // const isLarge = appSize === 'large';

    return (
        <div className="App">
            <header className="App__header">
                <AppHeader/>
                <div className="App__scroll">
                    {
                        isMobile ? (<p style={{color: "black"}}>Scroll Down</p>)
                        : (<p>Scroll Down</p>)
                    }
                    <Link to={routingMap.get('home').path}>
                        <img src={scrollDown} alt="doun"/>
                    </Link>
                </div>
            </header>

            <div className="App__content">
                <Routes>
                    <Route path={routingMap.get('home').path} element={appSize && <Home/>}/>
                    <Route path={routingMap.get('pages').path} element={appSize && <Pages/>}/>
                    <Route path={routingMap.get('features').path} element={appSize && <Features/>}/>
                    <Route path={routingMap.get('extensions').path} element={appSize && <Extensions/>}/>
                    <Route path={routingMap.get('tutorials').path} element={appSize && <Tutorials/>}/>
                </Routes>
            </div>

            <footer className="App__footer">
                <AppFooter/>
            </footer>

        </div>
    );
}

export default App;
