import React from "react";
import Navbar from "../Components/Navbar";

import "./Orders.css";

const Orders = () => {
  return (
    <>
      <Navbar />

      <div className="order_id">
        <div>
          <div className="order_id_one">
            <p>Orders</p>
            <p>&#62;</p>
            <p>Order 32457ABC</p>
          </div>
          <div className="order_id_two">
            <p>Order 32457ABC</p>
            <div>
              <button>Back</button>
              <button>Approve order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
