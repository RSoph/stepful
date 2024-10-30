import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-dropdown-select";

const coaches = [
    {value: "coach/a", label: "Alice"},
    {value: "coach/b", label: "Brian"},
    {value: "coach/c", label: "Charlene"},
    {value: "coach/d", label: "David"}

  ];

const students = [
    {value: "student/e", label: "Edward"},
    {value: "student/f", label: "Francine"},
    {value: "student/g", label: "Gerald"},
    {value: "student/h", label: "Harriet"}
  ];

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Stepful Scheduler</h1>
        <p className="lead">
          Log in here as a coach:
        </p>
        <ul>
          {coaches.map((item) => (
            <li key={item.label}>
              <Link to={item.value}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <p className="lead">
          Or here as a student:
        </p>
        <ul>
          {students.map((item) => (
            <li key={item.label}>
              <Link to={item.value}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);