import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <>
      <div className="container">
        <div className="row  justify-content-between">
          <div className="col-5">
            <h1 className="food_text">
              super fast <span>Food</span> <br />
              <span>delivery</span> service
            </h1>

            <p className="text_i">
              We provide super fast-delivery service. Let’s use our <br />
              services right now and get discounts of up to 50%
            </p>

            <div className="box">
              <button className="btn_header">
                Explore Food <br />
              </button>

              <a
                href="https://www.figma.com/file/FRgRLcPR6vraPfksLKFNNi/eFoodWebdesign?node-id=0%3A32&t=tffEyq4VNxP3lOzE-0"
                className="link_header"
              >
                Download App
              </a>
            </div>
          </div>
          <div className="col-6">
            <img src={props.image} className="img_header" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
