import Navbar from "../components/Navbar.jsx";
import React, { useState } from "react";
import Footer from "../components/Footer.jsx";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import "./Calc.css";
function Calc() {
  return (
    <>
      <Navbar></Navbar>

      <main className="main-bg">
        <section className="contact-crev section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="sec-head ">
                  <h2> محاسبه گر</h2>
                  <h5>نمی دونم</h5>

                  <div className="controls row">
                    <div className="col-6">
                      <div className="form-group mb-30">
                        <span class="arrow"></span>

                        <input
                          type="number"
                          id="temperatureInput"
                          class="input"
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group mb-30">
                        <select id="fromTemperatureUnit" class="unit-select">
                          <option value="celsius">Celsius</option>
                          <option value="kelvin">Kelvin</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="controls row">
                    <div className="col-6">
                      <div className="form-group mb-30">
                        <div class="result">
                          <p id="areaResult">نتیجه</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group mb-30">
                        <select id="toTemperatureUnit" class="unit-select">
                          <option value="celsius">Celsius</option>
                          <option value="kelvin">Kelvin</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    id="temperatureConvertBtn"
                    class="butn butn-md butn-bg main-colorbg3 text-dark"
                  >
                    محاسبه کن
                  </button>
                  {/* <div className="col-12">
                  <div className="form-group mb-30">
                    <select id="form_name" class="select-category">
                      <option value="">- Select -</option>
                      <option value="temperature">Temperature</option>
                      <option value="area">Area</option>
                      <option value="weight">Weight</option>
                      <option value="length">Length</option>
                      <option value="time">Time</option>
                    </select>
                  </div>
                </div> */}
                  {/* <div class="container">
                      <div class="conversion" id="temperature">
                        <h2 class="category-title">Temperature</h2>
                        <input
                          type="number"
                          id="temperatureInput"
                          class="input"
                          placeholder="Enter value"
                        />
                        <select id="fromTemperatureUnit" class="unit-select">
                          <option value="celsius">Celsius</option>
                          <option value="kelvin">Kelvin</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                        <span class="arrow"></span>
                        <select id="toTemperatureUnit" class="unit-select">
                          <option value="celsius">Celsius</option>
                          <option value="kelvin">Kelvin</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                        <button
                          id="temperatureConvertBtn"
                          class="butn butn-md butn-bg main-colorbg3 text-dark"
                        >
                          محاسبه کن
                        </button>
                        <div class="result">
                          <p id="temperatureResult">نتیجه</p>
                        </div>
                      </div>
                      <div class="conversion" id="area">
                        <h2 class="category-title">Area</h2>
                        <input
                          type="number"
                          id="areaInput"
                          class="input"
                          placeholder="Enter value"
                        />
                        <select id="fromAreaUnit" class="unit-select">
                          <option value="sqMeter">Square Meter</option>
                          <option value="sqKilometer">Square Kilometer</option>
                        </select>
                        <span class="arrow"></span>
                        <select id="toAreaUnit" class="unit-select">
                          <option value="sqMeter">Square Meter</option>
                          <option value="sqKilometer">Square Kilometer</option>
                        </select>
                        <button id="areaConvertBtn" class="convert-button">
                          Convert
                        </button>
                        <div class="result">
                          <p id="areaResult">Result will be displayed here</p>
                        </div>
                      </div>
                    </div>
                    <div class="conversion" id="weight">
                      <h2 class="category-title">Weight</h2>
                      <input
                        type="number"
                        id="weightInput"
                        class="input"
                        placeholder="Enter value"
                      />
                      <select id="fromWeightUnit" class="unit-select">
                        <option value="gram">Gram</option>
                        <option value="kilogram">Kilogram</option>
                      </select>
                      <span class="arrow"></span>
                      <select id="toWeightUnit" class="unit-select">
                        <option value="gram">Gram</option>
                        <option value="kilogram">Kilogram</option>
                      </select>
                      <button id="weightConvertBtn" class="convert-button">
                        Convert
                      </button>
                      <div class="result">
                        <p id="weightResult">Result will be displayed here</p>
                      </div>
                    </div>
                    <div class="conversion" id="length">
                      <h2 class="category-title">Length</h2>
                      <input
                        type="number"
                        id="lengthInput"
                        class="input"
                        placeholder="Enter value"
                      />
                      <select id="fromLengthUnit" class="unit-select">
                        <option value="meter">Meter</option>
                        <option value="kilometer">Kilometer</option>
                      </select>
                      <span class="arrow"></span>
                      <select id="toLengthUnit" class="unit-select">
                        <option value="meter">Meter</option>
                        <option value="kilometer">Kilometer</option>
                      </select>
                      <button id="lengthConvertBtn" class="convert-button">
                        Convert
                      </button>
                      <div class="result">
                        <p id="lengthResult">Result will be displayed here</p>
                      </div>
                    </div>
                    <div class="conversion" id="time">
                      <h2 class="category-title">Time</h2>
                      <input
                        type="number"
                        id="timeInput"
                        class="input"
                        placeholder="Enter value"
                      />
                      <select id="fromTimeUnit" class="unit-select">
                        <option value="second">Second</option>
                        <option value="minute">Minute</option>
                      </select>
                      <span class="arrow"></span>
                      <select id="toTimeUnit" class="unit-select">
                        <option value="second">Second</option>
                        <option value="minute">Minute</option>
                      </select>
                      <button id="timeConvertBtn" class="convert-button">
                        Convert
                      </button>
                      <div class="result">
                        <p id="timeResult">Result will be displayed here</p>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Calc;
