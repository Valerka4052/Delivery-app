import { useState } from "react";
import { OrderCart } from "../../components/OrderCart/OrderCart";
import { createOrder } from "../../api";
import { Form } from "../../components/Form/Form";
import { Container, OrdersContainer, TextNoOrders, TotalContainer, TotalText } from "./ShoppingCard.styled";
import { Button } from "../../components/Cart/Cart.styled";
import { Loader } from "../../components/Loader/Loader";

const userInitialValues = {
    address: '',
    email: '',
    phone: '',
    name: ''
};

export const ShopingCard = () => {
    const persistOrder = JSON.parse(localStorage.getItem("order"))
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState(persistOrder ? persistOrder : []);
    const [userIformation, setUserIformation] = useState(userInitialValues);
    const getCout = (id, value) => {
        const addCount = orders.map(item => item._id === id ? { ...item, count: value } : { ...item });
        window.localStorage.setItem("order", JSON.stringify(addCount));
        setOrders(addCount);
    }
    const removeDish = (_id) => {
        const filteredOrder = orders.filter(dish => dish._id !== _id);
        window.localStorage.setItem("order", JSON.stringify(filteredOrder));
        setOrders(filteredOrder);
    };

    const total = orders.reduce((acc, item) => { return acc + (item.count * item.price) }, 0);

    const getUserInfo = (e) => { setUserIformation(prev => ({ ...prev, [e.target.name]: e.target.value })) };

    const submitOrder = async () => {
        if (!userIformation.address || !userIformation.email || !userIformation.name || !userIformation.phone) return alert('please fill in all fields')
        const filteredDishes = orders.filter(item => item.count > 0);
        if (filteredDishes.length === 0) return alert('you have no items to order')
        const sendOrder = { ...userIformation, dishes: filteredDishes, total: total };
        console.log('sendOrder', sendOrder);
        setLoading(true)
        await createOrder(sendOrder)
        setLoading(false)
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
        <Container>
            {loading ? <Loader /> :
                <>
                    <Form getUserInfo={getUserInfo} userIformation={userIformation} />
                    <OrdersContainer>
                        < >
                            {orders.length > 0 ?
                                orders.map(item => <OrderCart removeDish={removeDish} getCout={getCout} item={item} key={item._id} />) :
                                <TextNoOrders>No orders yet</TextNoOrders>}
                        </>
                        {orders.length > 0 &&
                            <TotalContainer>
                                <TotalText>total: {total} uah</TotalText>
                                <Button onClick={discard}>discard</Button>
                                <Button onClick={submitOrder}>submit</Button>
                            </TotalContainer>}
                    </OrdersContainer>
                </>}
        </Container>
    );
};