import { useEffect, useState } from "react";
import { Cart } from "../components/Cart"
import { ShopButton } from "../components/ShopButton"
import { getAllShops, getAllDishesByShop } from "../api";

export const Shop = () => {
    const [dishes, setDishes] = useState([]);
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        const persistOrder = JSON.parse(localStorage.getItem("order"))
        if (persistOrder) { setBrand([persistOrder[0].brand]) }
        else
        { getAllShops().then(res => { setBrand(res.data); }).catch(err => console.log(err)); }
    }, []);
    useEffect(() => {
          if (brand.length === 1) getAllDishesByShop(brand[0]).then(res => { setDishes(res.data); }).catch(err => console.log(err));
           }, [brand]);
    const getBrandDishes = async (e) => {
        await getAllDishesByShop(e.target.innerText).then(res => { setDishes(res.data); }).catch(err => console.log(err));
    };
     const addToCart = (item) => {
       const existingArray = JSON.parse(localStorage.getItem('order')) || [];
         if (existingArray.some(dish => dish._id === item._id)) return;
             existingArray.push({ ...item, count: 0 });
         window.localStorage.setItem("order", JSON.stringify(existingArray));
         setBrand([item.brand]);
    };

       if (!dishes) return;
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {brand.map((item, idx) => <ShopButton key={idx} getBrandDishes={getBrandDishes} brand={item} />)}
            </div>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
          { dishes.length>0? dishes.map((item) => <Cart addToCart={addToCart} key={item._id} item={item} />): <p>choose your shop</p>}
            </div>
        </div>
    );
};

