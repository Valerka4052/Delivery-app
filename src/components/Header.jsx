import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div><NavLink to={'/'}>Shop</NavLink></div>
            <div><NavLink to={'/card'}>Shopping Card</NavLink></div>
            <div><NavLink to={'/history'}>History</NavLink></div>
        </div>
    );
};