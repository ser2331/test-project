export const APP_SET_SIZE = 'APP_SET_SIZE';

export const setSize = (payload = '') => ({
    type:APP_SET_SIZE,
    payload,
});
