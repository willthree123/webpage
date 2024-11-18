import { useState } from "react";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState<string>("");

  // Function to fetch data from the provided API
  const fetchData = async () => {
    try {
      const response = await fetch("https://hkust.azure-api.net/openai/operations/images/f8d074d2-bb78-4a25-89e5-73fee686f45e?api-version=2023-06-01-preview", {
        method: "GET", // Use GET to retrieve data
        headers: {
          "Content-Type": "application/json",
          "api-key": "c780408e10754da884f2c31269e233e1",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setApiResponse(JSON.stringify(data, null, 2)); // Format and display the JSON response
      } else {
        setApiResponse("Error fetching data");
      }
    } catch (error) {
      console.error("Error:", error);
      setApiResponse("Error fetching data");
    }
  };

  return (
    <div>
      <h1>Vite + React</h1>

      {/* Button to trigger the fetch */}
      <div className="card">
        <button onClick={fetchData}>Fetch API Data</button>
      </div>

      {/* Display API Response */}
      <div>
        <h3>API Response:</h3>
        <pre>{apiResponse}</pre>
      </div>
    </div>
  );
}

export default App;
