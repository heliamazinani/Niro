import Navbar from "../components/Navbar.jsx";
import React, { useState } from "react";
import Footer from "../components/Footer.jsx";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

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
                        <span className="arrow"></span>

                        <input
                          type="number"
                          id="temperatureInput"
                          className="input"
                          placeholder="Enter value"
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group mb-30">
                        <select id="fromTemperatureUnit" className="unit-select">
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
                        <div className="result">
                          <p id="areaResult">نتیجه</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group mb-30">
                        <select id="toTemperatureUnit" className="unit-select">
                          <option value="celsius">Celsius</option>
                          <option value="kelvin">Kelvin</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    id="temperatureConvertBtn"
                    className="butn butn-md butn-bg main-colorbg3 text-dark"
                  >
                    محاسبه کن
                  </button>
                  {/* <div className="col-12">
                  <div className="form-group mb-30">
                    <select id="form_name" className="select-category">
                      <option value="">- Select -</option>
                      <option value="temperature">Temperature</option>
                      <option value="area">Area</option>
                      <option value="weight">Weight</option>
                      <option value="length">Length</option>
                      <option value="time">Time</option>
                    </select>
                  </div>
                </div> */}
                  {/* <div className="container">
                      <div className="conversion" id="temperature">
                        <h2 className="category-title">Temperature</h2>
                        <input
                          type="number"
                          id="temperatureInput"
                          className="input"
                          placeholder="Enter value"
                        />
                        <select id="fromTemperatureUnit" className="unit-select">
                          <option value="celsius">Celsius</option>
                          <option value="kelvin">Kelvin</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                        <span className="arrow"></span>
                        <select id="toTemperatureUnit" className="unit-select">
                          <option value="celsius">Celsius</option>
                          <option value="kelvin">Kelvin</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                        <button
                          id="temperatureConvertBtn"
                          className="butn butn-md butn-bg main-colorbg3 text-dark"
                        >
                          محاسبه کن
                        </button>
                        <div className="result">
                          <p id="temperatureResult">نتیجه</p>
                        </div>
                      </div>
                      <div className="conversion" id="area">
                        <h2 className="category-title">Area</h2>
                        <input
                          type="number"
                          id="areaInput"
                          className="input"
                          placeholder="Enter value"
                        />
                        <select id="fromAreaUnit" className="unit-select">
                          <option value="sqMeter">Square Meter</option>
                          <option value="sqKilometer">Square Kilometer</option>
                        </select>
                        <span className="arrow"></span>
                        <select id="toAreaUnit" className="unit-select">
                          <option value="sqMeter">Square Meter</option>
                          <option value="sqKilometer">Square Kilometer</option>
                        </select>
                        <button id="areaConvertBtn" className="convert-button">
                          Convert
                        </button>
                        <div className="result">
                          <p id="areaResult">Result will be displayed here</p>
                        </div>
                      </div>
                    </div>
                    <div className="conversion" id="weight">
                      <h2 className="category-title">Weight</h2>
                      <input
                        type="number"
                        id="weightInput"
                        className="input"
                        placeholder="Enter value"
                      />
                      <select id="fromWeightUnit" className="unit-select">
                        <option value="gram">Gram</option>
                        <option value="kilogram">Kilogram</option>
                      </select>
                      <span className="arrow"></span>
                      <select id="toWeightUnit" className="unit-select">
                        <option value="gram">Gram</option>
                        <option value="kilogram">Kilogram</option>
                      </select>
                      <button id="weightConvertBtn" className="convert-button">
                        Convert
                      </button>
                      <div className="result">
                        <p id="weightResult">Result will be displayed here</p>
                      </div>
                    </div>
                    <div className="conversion" id="length">
                      <h2 className="category-title">Length</h2>
                      <input
                        type="number"
                        id="lengthInput"
                        className="input"
                        placeholder="Enter value"
                      />
                      <select id="fromLengthUnit" className="unit-select">
                        <option value="meter">Meter</option>
                        <option value="kilometer">Kilometer</option>
                      </select>
                      <span className="arrow"></span>
                      <select id="toLengthUnit" className="unit-select">
                        <option value="meter">Meter</option>
                        <option value="kilometer">Kilometer</option>
                      </select>
                      <button id="lengthConvertBtn" className="convert-button">
                        Convert
                      </button>
                      <div className="result">
                        <p id="lengthResult">Result will be displayed here</p>
                      </div>
                    </div>
                    <div className="conversion" id="time">
                      <h2 className="category-title">Time</h2>
                      <input
                        type="number"
                        id="timeInput"
                        className="input"
                        placeholder="Enter value"
                      />
                      <select id="fromTimeUnit" className="unit-select">
                        <option value="second">Second</option>
                        <option value="minute">Minute</option>
                      </select>
                      <span className="arrow"></span>
                      <select id="toTimeUnit" className="unit-select">
                        <option value="second">Second</option>
                        <option value="minute">Minute</option>
                      </select>
                      <button id="timeConvertBtn" className="convert-button">
                        Convert
                      </button>
                      <div className="result">
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
