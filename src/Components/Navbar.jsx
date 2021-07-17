import React from "react";
import {NavLink} from "react-router-dom";
import "./../index.css";
// import PhoneIcon from '@material-ui/icons/Phone';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar=()=>{
    return (
        <>
    <nav className="nav bg-primary py-2">
        <div className="container">
            <NavLink id="textS" to="/">
                {/* <PhoneIcon/> */}
                <h4 className="d-inline text-light">Mobile</h4>
            </NavLink>
            <NavLink id="textS" to="/">
                {/* <PhoneIcon/> */}
                <h4 className="d-inline text-light ml-5">Products</h4>
            </NavLink>
            <NavLink className="float-right"
             id="textS" to="/cart">
                {/* <PhoneIcon/> */}
                <button className="btn btn-info"><AddShoppingCartIcon/>My Cart</button>
            </NavLink>
        </div>
    </nav>
        </>
    )
}
export default Navbar;