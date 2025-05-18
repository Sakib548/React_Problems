import { NavLink } from "react-router";

const Navbar = ()=>{
    return  (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>

        </nav>
    )
 }
 
 export default Navbar;