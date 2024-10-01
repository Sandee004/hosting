// frontend/src/config.ts
const API_URL = import.meta.env.VITE_API_URL || "";

// frontend/src/App.tsx
//import { API_URL } from './config';
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/data`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Vite + React + Flask</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
