import { useState } from "react";
import { OrderCart } from "../components/OrderCart";
import { createOrder } from "../api";
const userInitialValues = {
    address: '',
    email: '',
    phone: '',
    name: ''
};

export const ShopingCard = () => {
    const persistOrder = JSON.parse(localStorage.getItem("order"))
    const [orders, setOrders] = useState(persistOrder ? persistOrder : []);
    const [userIformation, setUserIformation] = useState(userInitialValues);
    const getCout = (id, value) => {
        const addCount = orders.map(item => item._id === id ? { ...item, count: value } : { ...item });
        window.localStorage.setItem("order", JSON.stringify(addCount));
        setOrders(addCount);
    }

    const total = orders.reduce((acc, item) => { return acc + (item.count * item.price) }, 0);

    const getUserInfo = (e) => { setUserIformation(prev => ({ ...prev, [e.target.name]: e.target.value })) };
    const submitOrder = async () => {
        const sendOrder = { ...userIformation, dishes: orders, total: total }
        console.log('sendOrder',sendOrder);
        await createOrder(sendOrder)
        // console.log('sendOrder', sendOrder);
        setUserIformation(userInitialValues);
        setOrders([]);
        window.localStorage.removeItem("order")
    };
    const discard = () => {
        setOrders([]);
        window.localStorage.removeItem("order");
    };
    if (!orders) return;
    return (
        <div style={{ display: "flex", }}>
            <form style={{ display: "flex", flexDirection: "column", border: '1px solid white' }} >
                <input type="text" placeholder="address" name="address" value={userIformation.address} onChange={(e) => getUserInfo(e)} />
                <input type="email" placeholder="email" name="email" value={userIformation.email} onChange={(e) => getUserInfo(e)} />
                <input type="tel" placeholder="phone" name="phone" value={userIformation.phone} onChange={(e) => getUserInfo(e)} />
                <input type="text" placeholder="name" name="name" value={userIformation.name} onChange={(e) => getUserInfo(e)} />
            </form>
            <div>
                <div style={{ border: '1px solid white', width: 800, height: 800 }}>
                    {orders.length > 0 ? orders.map(item => <OrderCart orders={orders} getCout={getCout} item={item} key={item._id} />) : <p>no orders yet</p>}
                </div>
                <div><p>total: {total}uah</p><button onClick={submitOrder}>submit</button><button onClick={discard}>discard</button></div>
            </div>
        </div>
    );
}