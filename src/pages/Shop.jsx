import { Cart } from "../components/Cart"
import { ShpoButton } from "../components/ShpoButton"

export const Shop = () => {

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <p>shops</p>
                <ShpoButton />
            </div>
            <div style={{ display: 'flex' }}>
                <Cart />
            </div>
        </div>
    );
}