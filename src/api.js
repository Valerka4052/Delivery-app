import axios from 'axios'
// axios.defaults.baseURL = 'https://delivery-app-backend-wxdf.onrender.com';
export const getAllShops = async () => {
    try {
        const data = await axios.get('https://delivery-app-backend-wxdf.onrender.com/shop/all');
        return data
    } catch (error) {
        console.log(error.messge);
    }
};

export const getAllDishesByShop = async (shop) => {
    try {
        const data = await axios.post('https://delivery-app-backend-wxdf.onrender.com/shop', { shop: shop });
        return data
    } catch (error) {
        console.log(error.messge);
    }
};

export const createOrder = async (order) => {
    try {
        const data = await axios.post('https://delivery-app-backend-wxdf.onrender.com/order', order);
        return data
    } catch (error) {
        console.log(error.messge);
    }
};

export const findOrders = async ({email,phone}) => {
    try {
        const data = await axios.patch('https://delivery-app-backend-wxdf.onrender.com/order', {email,phone});
        return data
    } catch (error) {
        console.log(error.messge);
    }
};

export const recaptca = async ({token}) => {
    try {
        const data = await axios.post('https://www.google.com/recaptcha/api/siteverify', token);
        console.log('token', data);
        return data
    } catch (error) {
        console.log(error.messge);
    }
};

