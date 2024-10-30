import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";

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
    console.log(`Form submitted, ${dateTime}`);
  }

  useEffect(() => {
    const url = `/coach/${params.initial}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setCoach(response))
      .catch(() => navigate("/"));
  }, [params.initial]);

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