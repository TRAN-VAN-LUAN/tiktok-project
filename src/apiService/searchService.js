import * as request from '~/uitls/request';

const searchApi = async (q, type = 'less') => {
    try {
        const response = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default searchApi;
