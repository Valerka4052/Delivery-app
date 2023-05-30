import { Button,Container, ImageBox } from "./Cart.styled";

export const Cart = ({ item, addToCart, }) => {
    const { imageURL, dish, _id } = item;
    let persistOrder = JSON.parse(localStorage.getItem("order"));
    if (!persistOrder) persistOrder = [];
    const addedDish = persistOrder.some(dish => dish._id === _id);
    
    return (
        <Container>
            <ImageBox><img src={imageURL} alt={dish} width={300} height={200} /></ImageBox>
            <div>
                <p>{dish}</p>
                <Button disabled={addedDish} onClick={() => addToCart(item)}>{addedDish ? 'almost added' : 'add to cart'}</Button>
            </div>
        </Container>
    );
};