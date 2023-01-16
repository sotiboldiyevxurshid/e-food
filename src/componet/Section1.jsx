import React from "react";
import "./section1.css";
const section1_img = require("../../src/img/dostvks.png");
const section_time = require("../../src/img/Timer icon.png");
const section_outline = require("../../src/img/Outline.png")
const section_resture = require("../../src/img/Resturent.png")


export default function Section1() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="section1_dostavka">
              <img src={section1_img} alt="" />
            </div>
          </div>

          <div className="col-5">
            <div className="section1_div">
              <h1 className="section1_h1">
                <span>Stay</span> at home, we will <br /> Provide{" "}
                <span>good food</span>
              </h1>
              <p className="section1_p">
                We provide tasty food and superfast delivery at <br /> your
                home. Let’s use our services right now and <br /> get discounts
                of up to 50%.
              </p>

              <div className="section_box1">
                <img src={section_time} alt="" />
                <h5 className="section1_h5_1">fasted delivery in 30 Minutes</h5>
              </div>

              <div className="section_box2">
                <img src={section_outline} alt="" />
                <h5 className="section1_h5_2">300+ delivery men</h5>
              </div>

              <div className="section_box3">
                <img src={section_resture} alt="" />
                <h5 className="section1_h5_3">500+ restaurant & cafe shop</h5>
              </div>

              <div className="section_box4">
                <button className="section1_btn">See more</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
