import { useState } from "react";
import { OrderCart } from "../../components/OrderCart/OrderCart";
import { createOrder } from "../../api";
import { Form } from "../../components/Form/Form";
import { Container, InfoBox, OrdersContainer, TextNoOrders, TotalContainer, TotalText } from "./ShoppingCard.styled";
import { Button } from "../../components/Cart/Cart.styled";
import { Loader } from "../../components/Loader/Loader";
import ReCAPTCHA from "react-google-recaptcha";
import  {Map}  from "../../components/Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";

const userInitialValues = {
    address: '',
    email: '',
    phone: '',
    name: ''
};
const libraries = ['places'];
 
export const ShopingCard = () => {
    const persistOrder = JSON.parse(localStorage.getItem("order"))
    const [loading, setLoading] = useState(false);
    const [visibleCapcha, setVisibleCapcha] = useState(false);
    const [orders, setOrders] = useState(persistOrder ? persistOrder : []);
    const [userIformation, setUserIformation] = useState(userInitialValues);
    const [center, setCenter] = useState({ lat: 50.4501, lng: 30.5234 });
   
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries
    });

    const getCoords = (coords) => { setCenter(coords) };
    const getAdress = (address) => { setUserIformation(prev => ({ ...prev, address: address })) };

    const getCout = (id, value) => {
        const addCount = orders.map(item => item._id === id ? { ...item, count: value } : { ...item });
        window.localStorage.setItem("order", JSON.stringify(addCount));
        setOrders(addCount);
    };
    const removeDish = (_id) => {
        const filteredOrder = orders.filter(dish => dish._id !== _id);
        window.localStorage.setItem("order", JSON.stringify(filteredOrder));
        setOrders(filteredOrder);
    };

    const onChange = async () => {
        if (!userIformation.address || !userIformation.email || !userIformation.name || !userIformation.phone) {
            setVisibleCapcha(false);
            return alert('please fill in all fields')
        }
        const filteredDishes = orders.filter(item => item.count > 0);
        if (filteredDishes.length === 0) {
            setVisibleCapcha(false);
            return alert('you have no items to order');
        }
        const sendOrder = { ...userIformation, dishes: filteredDishes, total: total };
        setLoading(true)
        const res = await createOrder(sendOrder)
        setLoading(false);
        setVisibleCapcha(false)
        if(!res){return alert('Failed to place an order, please check your input')}
        setUserIformation(userInitialValues);
        setOrders([]);
        window.localStorage.removeItem("order")
        
    };

    const total = orders.reduce((acc, item) => { return acc + (item.count * item.price) }, 0);

    const getUserInfo = (e) => { setUserIformation(prev => ({ ...prev, [e.target.name]: e.target.value })) };

    const submitOrder = async () => {
        if (!userIformation.address || !userIformation.email || !userIformation.name || !userIformation.phone) return alert('please fill in all fields')
        const filteredDishes = orders.filter(item => item.count > 0);
        if (filteredDishes.length === 0) return alert('you have no items to order');
        setVisibleCapcha(true);
       
    };
    const discard = () => {
        setOrders([]);
        window.localStorage.removeItem("order");
        setVisibleCapcha(false)
    };

    if (!orders) return;
    return (
        <Container>
            {loading ? <Loader /> :
                <>
                    <InfoBox>
                        {isLoaded ? <Map center={center} /> : <Loader />}
                        <Form isLoaded={isLoaded} getUserInfo={getUserInfo} getAdress={getAdress} getCoords={getCoords} userIformation={userIformation} />
                    </InfoBox>
                    <OrdersContainer>
                        < >
                            {orders.length > 0 ?
                                orders.map(item => <OrderCart removeDish={removeDish} getCout={getCout} item={item} key={item._id} />) :
                                <TextNoOrders>No orders yet</TextNoOrders>}
                        </>
                        {orders.length > 0 &&
                            <TotalContainer>
                              
                                <TotalText>total: {total} uah</TotalText>
                                {visibleCapcha && <ReCAPTCHA sitekey={import.meta.env.VITE_CAPTCA_KEY} onChange={onChange} />}
                                <div>
                                    <Button onClick={discard}>discard</Button>
                                    <Button onClick={submitOrder}>submit</Button>
                                </div>
                            </TotalContainer>}
                    </OrdersContainer>
                </>}
        </Container>
    );
};

