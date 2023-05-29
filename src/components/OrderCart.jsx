/* eslint-disable react/prop-types */
export const OrderCart = ({ item, getCout,orders }) => {
    const { imageURL, dish, price } = item;

    const initialCount = orders.find((dish) => dish._id === item._id ).count
    // console.log('initialCount',initialCount);
    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            getCout(item._id, Number(e.target.value));
        }
    };
  
    return (
        <div style={{ display: "flex" }}>
            <div><img src={imageURL} alt={dish} width={300} height={200} /></div>
            <div>
                <p>{dish}</p><p>price {price}uah</p>
                <input type="number" name="count" value={initialCount} placeholder='0' min={0}
                    onChange={handleChange} />
            </div>
        </div>
    );
};