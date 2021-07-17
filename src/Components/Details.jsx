import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom"
export default class Details extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {(value) => {
                        const { id, title, img, info, price, inCart, company } =
                            value.detailProduct;
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-body my-5">
                                        <h1>{title}</h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3 ">
                                            <img className="img-fluid" src={img} alt="product" />
                                        </div>
                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                            <h2>model : {title}</h2>
                                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                                made by : <span className="text-uppercase">{company}</span>
                                            </h4>
                                            <h4 className="text-primary"><strong>price : <span>$</span>{price}</strong></h4>
                                            <p className="text-capitalize font-weight-bold mt-3 mb-0">some info product:</p>
                                            <p className="text-muted lead">{info}</p>
                                            <Link to="/">
                                                <button className="btn btn-primary mx-2">Back to Products</button>
                                            </Link>
                                           
                                            <button
                                                disabled={inCart ? true : false}
                                                className="btn btn-primary"
                                            onClick={() => {
                                    value.addToCard(id);
                                    value.openModal(id);
                                    // console.log("hello")
                                }}>
                                                {inCart ? "inCart" : "Add To Cart"}
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </>
        )
    }
}