import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { ProductConsumer } from "../Context";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
    render() {
        return (
            <>
                <section className="cartHeight">
                    <ProductConsumer>
                        {value => {
                            const { cart } = value;
                            if (cart.length > 0) {
                                return (
                                    <>
                                        <h1 className="my-5 
                                        text-center 
                                        align-items-center 
                                        font-weight-bold 
                                        text-primary">Your Cart</h1>
                                        <CartColumns />
                                        <CartList value={value}/>
                                        <CartTotals value={value}/>
                                    </>
                                )
                            }
                            else {
                                return (
                                    <EmptyCart />

                                )
                            }
                        }}
                    </ProductConsumer>
                </section>
            </>
        )
    }
}
