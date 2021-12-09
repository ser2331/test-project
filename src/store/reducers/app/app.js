import {app as AppActions} from '../../actions';
import Types from "../../../classes/types";

const {appSizesMap} = Types;

const initialState = {
    appSize: appSizesMap.get('desktop').key,
    isLogin:false,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case AppActions.APP_SET_SIZE:
            return {
                ...state,
                appSize: action.payload,
            };
        default:
            return state;
    }
};

export default app;