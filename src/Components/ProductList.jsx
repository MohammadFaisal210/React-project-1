import React, { Component } from "react";
// import { storeProducts } from "./Sdata";
import { ProductConsumer } from "./Context";
import Product from "./Product";

export default class ProductList extends Component {
    // state = {
    //     products: storeProducts
    // };
    render() {
        return (
            <>
            <section className="bg-light py-0 mt-0">
                <div className="container">
                    <h1 className="text-center">Our <strong className="text-primary">Products</strong></h1>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                {/* console.log(value) */}
                                return value.products.map(product => {
                                    return <Product key={product.id} product=
                                    {product} />
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
                </section>
            </>
        );
    }
}
