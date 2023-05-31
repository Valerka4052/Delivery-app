import { useEffect, useState } from "react";
import { Cart } from "../../components/Cart/Cart"
import { ShopButton } from "../../components/ShopButton/ShopButton"
import { getAllShops, getAllDishesByShop } from "../../api";
import { ButtonBox, Container, DishesBox, TextBox } from "./Shop.styled";
import { Loader } from "../../components/Loader/Loader";

export const Shop = () => {
    const [loading, setLoading] = useState(false);
    const [dishes, setDishes] = useState([]);
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        let persistOrder = JSON.parse(localStorage.getItem("order"));
        if (!persistOrder) persistOrder = [];
        if (persistOrder.length > 0) {
            setBrand([persistOrder[0].brand])
        } else {
            setLoading(true);
            getAllShops()
                .then(res => {
                    setBrand(res.data);
                    setLoading(false)
                })
                .catch(err => console.log(err));
        }
    }, []);
    useEffect(() => {
        if (brand.length === 1) {
            getAllDishesByShop(brand[0])
                .then(res => {
                    setDishes(res.data);
                })
                .catch(err => console.log(err))
        }
    }, [brand]);

    const getBrandDishes = (e) => {
        setLoading(true);
        getAllDishesByShop(e.target.innerText).then(res => {
            setLoading(false);
            setDishes(res.data);
        }).catch(err => console.log(err));
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
        <Container>
            {loading ? <Loader /> :
                <>
                    <ButtonBox >
                        {brand.map((item, idx) => <ShopButton key={idx} getBrandDishes={getBrandDishes} brand={item} />)}
                    </ButtonBox>
                    <DishesBox >
                        {dishes.length > 0 ? dishes.map((item) => <Cart addToCart={addToCart} key={item._id} item={item} />) : <TextBox><h2>choose your shop</h2></TextBox>}
                    </DishesBox>
                </>}
        </Container>
    );
};

