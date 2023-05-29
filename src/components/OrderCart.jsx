/* eslint-disable react/prop-types */
import { useState } from "react";


export const OrderCart = ({ item}) => {
      const { imageURL, dish, price } = item;
    const [countItems, setCountItems] = useState(1)
    const totalPriseItem = countItems * price;

    const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setCountItems(e.target.value);
        }
  };
  
    return (
        <div style={{ display: "flex" }}>
            <div><img src={imageURL} alt={dish} width={300} height={200} /></div>
            <div>
                <p>{dish}</p><p>prise {price}</p>
                <input type="number" name="count" min={0} value={countItems}
                    onChange={handleChange} />
            </div>
        </div>
    );
};