import React from "react";
import "./section.css";
const burger = require("../../src/img/Burger catagory (1).png");
const pizza = require("../../src/img/Pizza catagory.png");
const sandwich = require("../../src/img/sandwich catagory.png");
const food = require("../../src/img/Asian food.png");
const menu = require("../../src/img/Set menu.png");
const img1 = require("../../src/img/img1.png");
const img2 = require("../../src/img/img2.png");
const img3 = require("../../src/img/img3.png");
const img4 = require("../../src/img/img4.png");
const img5 = require("../../src/img/img5.png");
 const star = require("../../src/img/Star.png");

export default function Section() {
  return (
    <>
      <div className="container">
        <div className="row ustify-content-between">
          <div>
            <h1 className="section_h0">
              Our popular <span>Category</span>{" "}
            </h1>

            <div className="col-12">
              <div className="section_img">
                <img src={burger} alt="" />

                <img src={pizza} className="qa" alt="" />
                <img src={sandwich} className="qa" alt="" />
                <img src={food} alt="" className="qa" />
                <img src={menu} alt="" className="qa" />
              </div>
            </div>

            <div className="section_xurshid">
              <div>
                <img src={img1} className="img_sectionx" alt="" /> <br />
                <img src={star} alt="" /> <br />
                <h1 className="section_h1">Cheeseburger With Salad</h1>
                <h2 className="num1">$18.00</h2>
                <button className="btn_section1">Add to Cart</button>
              </div>

              <div>
                <img src={img2} className="img_section" alt="" /> <br /> <br />
                <img src={star} className="star" alt="" /> <br />
                <h1 className="section_h2">Beef Burger</h1>
                <h2 className="num2">$15.00</h2>
                <button className="btn_section2">Add to Cart</button>
              </div>

              <div>
                <img src={img3} className="img_section" alt="" /> <br />
                <img src={star} className="star" alt="" /> <br />
                <h1 className="section_h3">Royel Cheeseburger</h1>
                <h2 className="num3">$16.00</h2>
                <button className="btn_section3">Add to Cart</button>
              </div>

              <div>
                <img src={img4} className="img_section" alt="" /> <br />
                <img src={star} className="star" alt="" /> <br />
                <h1 className="section_h4">Black Gambugrer </h1>
                <h2 className="num4">$14.00</h2>
                <button className="btn_section4">Add to Cart</button>
              </div>

              <div className="box5">
                <img src={img5} className="img_section" alt="" /> <br />
                <img src={star} className="star" alt="" /> <br />
                <h1 className="section_h5">Chicken Burger</h1>
                <h2 className="num5">$15.00</h2>
                <button className="btn_section5">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
