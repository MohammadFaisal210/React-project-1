import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from "prop-types";

import "../index.css";
export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <>
                <div className="col-9  gy-3 my-3 col-md-6 mx-auto col-lg-3">
                    <ProductConsumer>
                        {value => (<div className="card  py-4" onClick={() =>

                         value.handleDetail(id)}>

                            <Link className="m-auto cardImg" to="/details">
                                <img className=" card-img-top mr-auto" className="imgSize py-2" src={img} alt="Card image cap" />
                            </Link>
                            <button className="btn btn-primary mx-0 cart_btn my-4  ml-auto"
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCard(id);
                                    value.openModal(id);
                                    // console.log("hello")
                                }}
                            >
                                {inCart ? (
                                    <p className="mb-0"
                                    >
                                        in cart
                                    </p>
                                ) : (<AddShoppingCartIcon />)}
                            </button>
                            <div className="d-flex px-3 justify-content-between py-3">
                                <p className=" align-self-center mb-0">{title}</p>
                                <h5 className="text-blue font-italic mb-o">
                                    <span className="mr-1">$</span>
                                    {price}
                                </h5>
                            </div>
                        </div>)}

                    </ProductConsumer>
                </div>
            </>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}