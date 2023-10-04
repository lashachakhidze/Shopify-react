import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Details from "../pages/details";

const prod = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <>
      <div key={id} className="col-5">
        <div className="card">
          <img src={image} className="card-img-top img-fluid" />
          <div className="card-body">
            <p className="card-text mb-2">{brand}</p>
            <h5>{name} </h5>
            <ReactStars
              count={5}
              edit={true}
              value={4}
              size={24}
              activeColor="#EA9D5A"
            />
            <div className="mb-3">
              <p className="price mb-2">
                <span className="red">{price}$</span>&nbsp;{" "}
                <strike>{price * 2}$</strike>
              </p>

              <Link to="/details" onClick={() => viewProductDetails(id)}>
                <p className="text-center">
                  <button className="fs-4" id="clear-cart">
                    View Details
                  </button>
                </p>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  addToCart(id);
                  event.target.classList.toggle("red");
                }}
                className="myButton"
              >
                Add to Cart
                {cartItemAmount > 0 && `(${cartItemAmount})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default prod;
