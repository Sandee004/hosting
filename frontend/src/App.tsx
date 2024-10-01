import { API_URL } from "./config";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/data`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data from backend");
      });
  }, []);

  return (
    <div>
      <h1>Vite + React + Flask</h1>
      {message && <p>Message from backend: {message}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default App;
