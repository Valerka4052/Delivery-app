
export const ShopButton = ({ brand, getBrandDishes }) => {
    return (
        <div>
            <button onClick={(e) => getBrandDishes(e)}>{brand}</button>
        </div>
    );
};