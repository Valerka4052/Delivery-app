import { useState } from "react";
import { findOrders } from "../../api";
import { Loader } from "../../components/Loader/Loader";
import { HistoryOrderComponent } from "../../components/HistoryOrderComponent/HistoryOrderComponent";
import { Button } from "../../components/Cart/Cart.styled";
import { Container, FormBox, OrdersBox,Input } from "./HistoryPage.styled";

const userInitialValues = {
    email: '',
    phone: ''
};

export const HistoryPage = () => {
    const [loading, setLoading] = useState(false);
    const [userIformation, setUserIformation] = useState(userInitialValues);
    const [orders, setOrders] = useState([]);
    const getUserInfo = (e) => { setUserIformation(prev => ({ ...prev, [e.target.name]: e.target.value })) };

    const handleSubmit = async () => {
        if (!userIformation.email || !userIformation.phone) {
            return alert('Fill in all the fields')
        }
        setLoading(true)
        const searchOrders = await findOrders(userIformation);
        setLoading(false)
        if (!searchOrders || !searchOrders.data.length) { return alert('you have no orders') };
        setOrders(searchOrders.data)
        setUserIformation(userInitialValues)
    };
    if (!orders) return;
    return (
        <Container>
            {loading ? <Loader /> :
                <>
                    <FormBox >
                        <p>search your orders by phone and email</p>
                        <Input type="email" placeholder="email" name="email" value={userIformation.email} onChange={(e) => getUserInfo(e)} />
                        <Input type="tel" placeholder="phone" name="phone" value={userIformation.phone} onChange={(e) => getUserInfo(e)} />
                        <Button type="button" onClick={handleSubmit}>search</Button>
                    </FormBox>
                    {orders.length > 0 &&
                        <OrdersBox>
                            {orders.map(order => { return <HistoryOrderComponent order={order} key={order._id} /> })}
                        </OrdersBox>}
                </>}
        </Container>
    );
};