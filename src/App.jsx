import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [responseText, setResponseText] = useState("");

  const url = "https://hkust.azure-api.net/openai/operations/images/f8d074d2-bb78-4a25-89e5-73fee686f45e?api-version=2023-06-01-preview";

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": "c780408e10754da884f2c31269e233e1",
        },
      });

      const text = await response.text();

      setResponseText(text); // Update the state with the response text
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseText("Error fetching data");
    }
  };

  return (
    <>
      {/* Button to trigger API call */}
      <button onClick={fetchData}>Fetch Data</button>

      {/* Display the response */}
      <div>
        <p>Response: {responseText}</p>
      </div>
    </>
  );
}

export default App;
