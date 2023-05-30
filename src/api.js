import axios from 'axios'
axios.defaults.baseURL = 'https://delivery-app-backend-wxdf.onrender.com';
export const getAllShops = async () => {
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

export const createOrder = async (order) => {
    try {
        const data = await axios.post('/order', order);
        return data
    } catch (error) {
        console.log(error.messge);
    }
};

export const findOrders = async ({email,phone}) => {
    try {
        const data = await axios.patch('/order', {email,phone});
        return data
    } catch (error) {
        console.log(error.messge);
    }
};



