import { useEffect, useState } from "react";
import { Cart } from "../components/Cart"
import { ShopButton } from "../components/ShopButton"
import { getAllDishes, getAllDishesByShop } from "../../api";

export const Shop = () => {
    const [dishes, setDishes] = useState([]);
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('order'))) { setBrand([JSON.parse(localStorage.getItem('order'))[0].brand]) }
        else
        { getAllDishes().then(res => { setBrand(res.data); }).catch(err => console.log(err)); }
    }, []);
    useEffect(() => {
          if (brand.length === 1) getAllDishesByShop(brand[0]).then(res => { setDishes(res.data); }).catch(err => console.log(err));
           }, [brand]);
    const getBrandDishes = async (e) => {
        await getAllDishesByShop(e.target.innerText).then(res => { setDishes(res.data); }).catch(err => console.log(err));
    }
     const addToCart = (item) => {
       const existingArray = JSON.parse(localStorage.getItem('order')) || [];
        existingArray.push(item);
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

// export const Shop = () => {
//     const [dishes, setDishes] = useState([]);
//     const [brand, setBrand] = useState('');
//     const categoryButtons = [...new Set(dishes.map(obj => obj.brand))];
//     useEffect(() => {
//         getAllDishes().then(res => { setDishes(res.data); }).catch(err => console.log(err));
//     }, []);
//     const getBrandDishes = (e) => {
//         console.log(e.target.innerText);
//         setBrand(e.target.innerText);
//     }
//     let brandDishes = dishes.filter(item => item.brand === brand);
//     if (!brand) brandDishes = [];
//        if (!dishes) return;
//     return (
//         <div style={{ display: 'flex' }}>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//                 {categoryButtons.map((item, idx) => <ShopButton key={idx} getBrandDishes={getBrandDishes} brand={item} />)}
//             </div>
//             <div style={{ display: 'flex', flexWrap: "wrap" }}>
//                 {brandDishes.map((item) => <Cart key={item._id} item={item} />)}
//             </div>
//         </div>
//     );
// };