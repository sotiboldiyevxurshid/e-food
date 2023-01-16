import React from "react";
import "./section2.css";
const pizza1 = require("../../src/img/pizza 1.png");
const pizza2 = require("../../src/img/pizza 2.png");
const pizza3 = require("../../src/img/pizza 3.png");

export default function Section2() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section2_text">
              <h1 className="section2_h1">
                Top Food <span>restaurant</span>
              </h1>
            </div>
          </div>
          <div className="col-4">
            <div className="section2_div">
              <div className="div">
                <img src={pizza1} alt="" />
                <h1 className="section_1">Blaze Pizza</h1>
                <div className="section2_div_1">
                  <h1 className="section2_soat">11.00 AM - 10.00 PM</h1>
                  <button className="btn_olish">olish</button>
                </div>
              </div>

              <div className="div2">
                <img src={pizza2} alt="" />
                <h1 className="section_2">Pizza Ranch</h1>
                <div className="section2_div_1">
                  <h1 className="section2_soat">11.00 AM - 10.00 PM</h1>
                  <button className="btn_olish">olish</button>
                </div>
              </div>

              <div className="div3">
                <img src={pizza3} alt="" />
                <h1 className="section_3">Dion’s Pizza Hut</h1>
                <div className="section2_div_1">
                  <h1 className="section2_soat">11.00 AM - 10.00 PM</h1>
                  <button className="btn_olish">olish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
