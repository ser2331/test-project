import React from "react";
import {Map, Placemark, YMaps} from "react-yandex-maps";

import "./app-footer.scss";

const AppFooter = () => {
    return (
        <div className="AppFooter">
            <YMaps
                style={{width: '100%', height: '100%'}}
                query={{apikey: 'e60e2992-cc07-48b6-bd8b-3250162140d0'}}
            >
                <Map
                    width="100%"
                    height="250px"
                    state={{
                        center: [55.769190, 37.472674],
                        zoom: 9,
                        controls: [],
                        behaviors: [],
                    }}
                    className="AppFooter__map"
                >
                    <Placemark
                        geometry={{ coordinates: [55.769190, 37.472674] }}
                    />
                </Map>
            </YMaps>
            <div className="AppFooter__basement">
                <div className="name">© 2016 PSDfreebies.com – All Right Reserved</div>
                <div className="desby"/>
            </div>
        </div>
    );
};

export default AppFooter;