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
      <p>HI!</p>
    </div>
  )
};

export default Coach;