import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/actions";
import * as actions from "../Redux/actions";

import "./Orders.css";

const Orders = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/products");
  //     dispatch(actions.initializeProducts(response.data.products));
  //     console.log(response.data.products);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleApprove = (productId) => {
    dispatch(actions.approveProduct(productId));
  };

  const handleMarkMissing = (productId, urgent) => {
    dispatch(actions.markMissing(productId, urgent));
  };
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
          <div class="col-md-12 table-container">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img className="orderImg" src={product.image} alt="" />
                    </td>
                    <td className="tp">{product.name}</td>
                    <td className="tdd">{product.brand}</td>
                    <td className="tdd">{`$${product.price} / 6 * 1LB`}</td>
                    <td className="tdd">{`${product.quantity} x 6 * 1LB`}</td>
                    <td className="tdd">0</td>
                    <td className="tss">{product.status}</td>
                    <td className="tss">
                      <div className="orderStatus">
                        <p onClick={() => handleApprove(product.id)}>
                          <i className="fa-solid fa-check"></i>
                        </p>

                        <p
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </p>

                        {/* modal */}

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Missing Product
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="modal-body">
                                <p>
                                  Is 'Chicken Brast Fillest, Boneless...'urgent?
                                </p>
                              </div>
                              <div className="modal-footer">
                                <a data-bs-dismiss="modal">No</a>
                                <a
                                  onClick={() =>
                                    handleMarkMissing(product.id, true)
                                  }
                                >
                                  Yes
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>Edit</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
