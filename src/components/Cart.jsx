export const Cart = () => {
    const addToCart = ()=>{console.log('cart added');}
    return (
        <div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/90/No_image_available_600_x_400.svg" alt="image" width={300}height={200} /></div>
            <div>
                <p>burger name</p>
            <button onClick={addToCart}>add to cart</button>
            </div>
                    </div>
    )
}