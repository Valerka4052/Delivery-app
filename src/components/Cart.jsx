export const Cart = ({ item, addToCart }) => {
    const { imageURL, dish } = item;
    return (
        <div>
            <div><img src={imageURL} alt={dish} width={300} height={200} /></div>
            <div>
                <p>{dish}</p>
                <button onClick={() => addToCart(item)}>add to cart</button>
            </div>
        </div>
    );
};