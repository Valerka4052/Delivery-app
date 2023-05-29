import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4444';
export const getAllDishes = async () => {
    try {
        const data = await axios.get('/shop/all');
        return data
    } catch (error) {
        console.log(error.messge);
    }
};

export const getAllDishesByShop = async (shop) => {
    try {
        const data = await axios.post('/shop', { shop: shop });
        return data
    } catch (error) {
        console.log(error.messge);
    }
};