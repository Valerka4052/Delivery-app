import { useState } from "react";
import { findOrders } from "../api";

const userInitialValues = {
    email: '',
    phone: ''
};

export const HistoryPage = () => {
    const [userIformation, setUserIformation] = useState(userInitialValues); 
    const [orders,setOrders]=useState([])
    const getUserInfo = (e) => { setUserIformation(prev => ({ ...prev, [e.target.name]: e.target.value })) };
    const handleSubmit = async (e) => {
        e.preventDefault()
        const searchOrders = await findOrders(userIformation)
        setOrders(searchOrders.data)
        setUserIformation(userInitialValues)
}
console.log('orders',orders);
    return (
        <>
        <div>
           <input type="email" placeholder="email" name="email" value={userIformation.email} onChange={(e) => getUserInfo(e)} />
                <input type="tel" placeholder="phone" name="phone" value={userIformation.phone} onChange={(e) => getUserInfo(e)} />
            <button type="button" onClick={(e)=>handleSubmit(e)}></button>
       </div>
        <div>
                
        </div>
        </>
    )
}