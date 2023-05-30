import { ButtonShop } from "./ShopButton.styled";

export const ShopButton = ({ brand, getBrandDishes }) => {
    return (
        <div>
            <ButtonShop onClick={(e) => getBrandDishes(e)}>{brand}</ButtonShop>
        </div>
    );
};