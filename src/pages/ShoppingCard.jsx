import { OrderCart } from "../components/OrderCart";

export const ShopingCard = () => {
    return (
        <div style={{ display: "flex", }}>
            <div style={{ display: "flex", flexDirection: "column",border:'1px solid white' }} >
                <input type="text" placeholder="address" name="address" />
                <input type="email" placeholder="email" name="email" />
                <input type="tel" placeholder="phone" name="phone" />
                <input type="text" placeholder="name" name="name" />
            </div>
            <div>
                <div style={{border:'1px solid white'}}><OrderCart /></div>
                <div><p>total: 200$</p><button>submit</button></div>
                
            </div>
        </div>
    );
}