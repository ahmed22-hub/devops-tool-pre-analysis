import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Frontend</h1>
      <p><strong>Message from Django Backend:</strong></p>
      <p>{message}</p>
    </div>
  );
}

export default App;
