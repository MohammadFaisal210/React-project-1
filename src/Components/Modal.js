import React, { Component } from "react";
import {ProductConsumer} from "./Context";
import {Link} from "react-router-dom";


export default class Modal extends Component {
    render(){
        return (
            <>
            <ProductConsumer>
                {value =>{
                    const {modalOpen,closeModal} = value;
                    const {img,title,price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                       return( <div className="modalWrapper">
                            <div className="container">
                                <div className="row ">
                                    <div id="modal" className="col-8 p-5 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item added to cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : $ {price}</h5>
                                        <Link to="/">
                                            <button onClick={()=>{
                                                closeModal()
                                            }} className="btn btn-primary my-2 mx-1">Continue shopping</button>
                                        </Link>
                                        <Link to="/cart">
                                        <button onClick={()=>
                                         closeModal()
                                        } className="btn btn-danger">Go to cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                }}
                </ProductConsumer>
            </>
        )
    }
}