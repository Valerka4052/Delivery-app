import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <div><NavLink to={'/'}>Shop</NavLink></div>
            <div><NavLink to={'/card'}>Shopping Card</NavLink></div>
        </div>
    );
};