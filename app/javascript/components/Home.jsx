import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-dropdown-select";
import { getCoachesAll } from './getCoachesAll';


const coaches = [
    {value: "coach/1", label: "Alice"},
    {value: "coach/2", label: "Brian"},
    {value: "coach/3", label: "Charlene"},
    {value: "coach/4", label: "David"}

  ];

const students = [
    {value: "student/1", label: "Edward"},
    {value: "student/2", label: "Francine"},
    {value: "student/3", label: "Gerald"},
    {value: "student/4", label: "Harriet"}
  ];

const coachesAll = getCoachesAll();

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