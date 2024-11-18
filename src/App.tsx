import { useState } from "react";
import "./App.css";

function App() {
  const [responseText, setResponseText] = useState<string>(""); // State to store the response text

  const handleButtonClick = async () => {
    try {
      // Making the API call
      const response = await fetch("https://hkust.azure-api.net/openai/operations/images/f8d074d2-bb78-4a25-89e5-73fee686f45e?api-version=2023-06-01-preview", {
        method: "GET", // Assuming GET method for fetching the image
        headers: {
          "Content-Type": "application/json",
          "api-key": "c780408e10754da884f2c31269e233e1", // Your API key
        },
      });

      // Check if response is successful
      if (response.ok) {
        const result = await response.json();
        // Assuming the response contains some text you want to display
        setResponseText(result?.data || "No data received");
      } else {
        setResponseText("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseText("Error fetching data");
    }
  };

  return (
    <div>
      <h1>API Fetch Example</h1>

      {/* Button to trigger API request */}
      <button onClick={handleButtonClick}>Fetch Image</button>

      {/* Text to display the response */}
      <p>{responseText}</p>
    </div>
  );
}

export default App;
