import React, { Children } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Partials/Navbar";
import jsPDF from "jspdf";
import Home from "./Home";
import About from "./About";
import Usage from "./Usage";
import Dev from "./Dev";
import NotFound from "./NotFound";

const App = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  /*  const [totals, setTotals] = useState({
    males: 0,
    females: 0,
    Children: 0,
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "totalMales" || id === "totalFemales" || id === "boys") {
      const newValues = parseInt(value, 10);
      setTotals((prevTotals) => ({
        ...prevTotals,
        [id]: newValues,
      }));
    }
  }; */

  /* const calculateTotalAttendance = () => {
    const { males, females, children } = totals;
    const totalMales = document.getElementById("displayMales");
    const totalFemales = document.getElementById("displayFemales");
    const totalChildren = document.getElementById("displayChildren");
    const totalCars = document.getElementById("displayCars");

    totalMales.innerText = males;
    totalFemales.innerText = females;
    totalChildren.innerText = children;
    // Calculate and display total attendance
    const totalAttendance = males + females + children;
    document.getElementById("displayTotal").innerText = totalAttendance;
    // You can add logic to calculate and display total cars based on input values
  }; */
  function calculateAttendance() {
    // Get all input fields
    const maleInputs = document.querySelectorAll('input[id^="totalMales"]');
    const femaleInputs = document.querySelectorAll('input[id^="totalFemales"]');
    const boysInputs = document.querySelectorAll('input[id="boys"]');
    const girlsInputs = document.querySelectorAll('input[id="girls"]');
    const carsInput = document.getElementById("totalCars");

    // Initialize variables to store totals
    let totalMales = 0;
    let totalFemales = 0;
    let totalChildren = 0;

    // Calculate total males
    maleInputs.forEach((input) => {
      totalMales += parseInt(input.value) || 0; // Add value to totalMales, default to 0 if input is empty or not a number
    });

    // Calculate total females
    femaleInputs.forEach((input) => {
      totalFemales += parseInt(input.value) || 0; // Add value to totalFemales, default to 0 if input is empty or not a number
    });

    // Calculate total children (boys and girls)
    boysInputs.forEach((input) => {
      totalChildren += parseInt(input.value) || 0; // Add value to totalChildren, default to 0 if input is empty or not a number
    });
    girlsInputs.forEach((input) => {
      totalChildren += parseInt(input.value) || 0; // Add value to totalChildren, default to 0 if input is empty or not a number
    });

    // Calculate total cars
    const totalCars = parseInt(carsInput.value) || 0; // Get value of total cars, default to 0 if input is empty or not a number

    // Display total attendance
    document.getElementById("displayMales").textContent = totalMales;
    document.getElementById("displayFemales").textContent = totalFemales;
    document.getElementById("displayChildren").textContent = totalChildren;
    document.getElementById("displayCars").textContent = totalCars;
    document.getElementById("displayTotal").textContent =
      totalMales + totalFemales + totalChildren;
    //let reportInstance = report;
    const report = `\nMales:\n\t${totalMales}\n\nFemales: \n\t${totalFemales}\n\nChildren: \n\t${totalChildren}\n\n\tCars: ${totalCars}`;
    //printReport(report);
  }
  const printReport = (report) => {
    const doc = new jsPDF();
    doc.text(report, 10, 10);
    doc.save(`${new Date().toDateString()} WCI Spintex attendance`);
  };

  return (
    <div className="App">
      <div className="mainPage">
        <div className="container">
          <form id="attendanceForm" className="attendanceForm1">
            {/* Fields for Male and Female Attendance */}
            {/* Your form fields go here */}
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">1</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">2</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">3</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            {/*  <div className="wrapForms">
            <div className="form-group">
              <p className="textBoxHeader">4</p>
              <label>Males:</label>
              <input type="number" className="form-control" id="totalMales" />
            </div>
            <div className="form-group">
              <label>Females:</label>
              <input type="number" className="form-control" id="totalFemales" />
            </div>
          </div> */}
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">5</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">6</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">7</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">8</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">9</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">10</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">11</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">12</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">13</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">14</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">15</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">16</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>

            <div className="attendanceFormsKids">
              <div className="form-group">
                <p className="textBoxHeader">CH-A</p>
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
              <div className="form-group">
                <label>CH-A</label>
                <input type="number" className="form-control" id="boys" />
              </div>
            </div>
            <div className="attendanceFormsKids">
              <div className="form-group">
                <p className="textBoxHeader">CH-B</p>
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
              <div className="form-group">
                <label>CH-B</label>
                <input type="number" className="form-control" id="boys" />
              </div>
            </div>
            <div className="attendanceFormsKids">
              <div className="form-group">
                <p className="textBoxHeader">CH-C</p>
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
              <div className="form-group">
                <label>CH-C</label>
                <input type="number" className="form-control" id="boys" />
              </div>
            </div>
            {/* <div className="wrapForms">
            <div className="form-group">
              <p className="textBoxHeader">Teens Dept.</p>
              <label>Males:</label>
              <input type="number" className="form-control" id="totalMales" />
            </div>
            <div className="form-group">
              <label>Females:</label>
              <input type="number" className="form-control" id="totalFemales" />
            </div>
          </div> */}
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">Teens Dept </p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">Children (main) </p>
                <label>Children:</label>
                <input type="number" className="form-control" id="boys" />
              </div>
              <div className="form-group">
                <label>Children Outside:</label>
                <input type="number" className="form-control" id="boys" />
              </div>
            </div>
            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">Outside .</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>

            <div className="wrapForms">
              <div className="form-group">
                <p className="textBoxHeader">Late comers</p>
                <label>Males:</label>
                <input type="number" className="form-control" id="totalMales" />
              </div>
              <div className="form-group">
                <label>Females:</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalFemales"
                />
              </div>
            </div>
            <div className="form-group">
              <p className="textBoxHeader">Cars</p>

              <input type="number" className="form-control" id="totalCars" />
            </div>
          </form>
          <button className="button" onClick={calculateAttendance}>
            Calculate Total Attendance
          </button>
          <hr />
          <button className="button" onClick={printReport}>
            Print Report
          </button>
          <hr />
          {/* Display Total Attendance */}
          <div id="totalAttendance" className="mt-4">
            <h2>Total Attendance:</h2>
            <p className="textBoxHeader1">
                  Males: <span id="displayMales"></span>
            </p>
            <p className="textBoxHeader1">
                  Females: <span id="displayFemales"></span>
            </p>
            <p className="textBoxHeader1">
                  Children: <span id="displayChildren"></span>
            </p>
            <p className="textBoxHeader2">
              Total Attendance: <span id="displayTotal"></span>
            </p>
            <p className="textBoxHeader2">
              Total Cars: <span id="displayCars"></span>
            </p>
            <p className="dateTime">{date}</p>
            <p className="dateTime">{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default App;
