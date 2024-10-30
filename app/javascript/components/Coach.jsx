import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";

const Coach = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [coach, setCoach] = useState({});

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
      <input aria-label="Date and time" type="datetime-local" />

      <p>Here are your past timeslots:</p>
    </div>
  )
};

export default Coach;