import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/travel" activeStyle>
                        Travel
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;