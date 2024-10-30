import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import { createTimeSlot } from './createTimeSlot';


const Coach = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [coach, setCoach] = useState({});
  const [dateTime, setDateTime] = useState('');

  const handleChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {"coach_name": coach.name, "timeslot": dateTime}
    console.log(data)
    createTimeSlot(data);
  }

  useEffect(() => {
    const url = `/coach/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setCoach(response))
      .catch(() => navigate("/"));
  }, [params.id]);

  return (
    <div>
      <p>HI {coach.name}!</p>
      <p>Here are your upcoming timeslots:</p>
      <p>Create a new timeslot here by giving us a start time for it:</p>
      <form onSubmit={handleSubmit}>
        <input aria-label="Date and time" type="datetime-local" value={dateTime} onChange={handleChange} />
        <button type="submit">Click to create available timeslot</button>
      </form>
      <p>Here are your past timeslots:</p>
    </div>
  )
};

export default Coach;