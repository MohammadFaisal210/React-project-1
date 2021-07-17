import React, { Component } from "react";
export default class CartColumns extends Component{
    render(){
        return(
            <>
               <div className="container-fluid d-none d-lg-block text-center font-weight-bold text-dark">
                   <div className="row my-3">
                       <div className="col-lg-2 col-10 mx-auto">
                           <p className="text-uppercase">product</p>
                       </div>
                       <div className="col-lg-2 col-10 mx-auto">
                           <p className="text-uppercase">name of product</p>
                       </div>
                       <div className="col-lg-2 col-10 mx-auto">
                           <p className="text-uppercase">price</p>
                       </div>
                       <div className="col-lg-2 col-10 mx-auto">
                           <p className="text-uppercase">quantity</p>
                       </div>
                       <div className="col-lg-2 col-10 mx-auto">
                           <p className="text-uppercase">remove</p>
                       </div>
                       <div className="col-lg-2 col-10 mx-auto">
                           <p className="text-uppercase">total</p>
                       </div>
                   </div>
               </div>
            </>
        )
    }
}