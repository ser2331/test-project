import axios from 'axios';

class ApiService {
    baseApi = 'https://api.ybdyb.ru/api/';

    // eslint-disable-next-line no-return-await
    getExample = async (token) => await axios.get(this.baseApi, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    // eslint-disable-next-line no-return-await
    postExample = async (data) => await axios.post(this.baseApi, {
        data,
    }, {
        headers: {
            Authorization: `Bearer ${data.token}`,
        },
    });
}

export default ApiService;
