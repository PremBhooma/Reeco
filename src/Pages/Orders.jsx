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

      <div class="container mt-5">
        <div class="row orderDetails">
          <div class="col-md-2">
            <div className="orderDetailsBox">
              <div>
                <p>Supplier</p>
                <h4>East coast fruits & vegetables</h4>
              </div>
              <div className="vl"></div>
            </div>
          </div>

          <div class="col-md-2">
            <div className="orderDetailsBox">
              <div>
                <p>Shipping date</p>
                <h4>Thu, Feb 10</h4>
              </div>
              <div className="vl"></div>
            </div>
          </div>
          <div class="col-md-2">
            <div className="orderDetailsBox">
              <div>
                <p>Total</p>
                <h4>$ 15,028.3</h4>
              </div>
              <div className="vl"></div>
            </div>
          </div>
          <div class="col-md-2">
            <div className="orderDetailsBox">
              <div>
                <p>Category</p>
                <div>
                  <div className="categoryIcons">
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                  </div>
                  <div className="categoryIcons">
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                    <p>
                      <i class="fa-solid fa-snowflake"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="vl"></div>
            </div>
          </div>
          <div class="col-md-2">
            <div className="orderDetailsBox">
              <div>
                <p>Department</p>
                <h4>300-444-678</h4>
              </div>
              <div className="vl"></div>
            </div>
          </div>
          <div class="col-md-2">
            <div className="orderDetailsBox">
              <div>
                <p>Status</p>
                <h4>Awaiting your approvel</h4>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row orderTable">
          <div class="col-md-12">
            <div className="orderTableBoxOne">
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                />
                <div className="search-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>

              <div className="orderTableButtons">
                <button>Add item</button>
                <p>
                  <i class="fa-solid fa-print"></i>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-12">One of three columns</div>
        </div>
      </div>
    </>
  );
};

export default Orders;
