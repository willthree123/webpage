import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Divider, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { AddCircle as GenerateIcon, Image as ImageIcon, CloudDownload as DownloadIcon, CloudUpload as UploadIcon, Close as CloseIcon } from "@mui/icons-material";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("Image will appear here...");
  const [isEnlarged, setEnlarged] = useState(false);

  // Refined fetch function to generate a prompt using the API
  async function generatePrompt() {
    try {
      const response = await fetch("https://hkust.azure-api.net/openai/deployments/gpt-4o-mini/chat/completions?api-version=2024-10-01-preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "c780408e10754da884f2c31269e233e1", // Your API key
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "Imagine you are a celebrated fantasy novelist with over 15 years of experience. Please craft a vivid four-sentence description of an ancient castle crumbling during a fierce storm. Focus on the dramatic elements, including the angle of the lightning strikes and the swirling clouds, to create a striking visual image.",
            },
            {
              role: "user",
              content: prompt, // Use the input prompt from the user
            },
          ],
        }),
      });

      const result = response.status === 200 ? await response.json() : await response.text();

      if (response.ok) {
        console.log("Prompt generated successfully:", result);
        setImage(result.choices?.[0]?.message?.content || "No response received.");
      } else {
        console.error("Failed to generate prompt:", result);
        setImage("Failed to generate prompt.");
      }
    } catch (error) {
      console.error("Error generating prompt:", error);
      setImage("Error generating prompt.");
    }
  }

  const handleGenerateImage = () => {
    console.log("Image generated based on prompt:", prompt);
    setImage("Generated image will appear here.");
  };

  const handleImageClick = () => {
    setEnlarged(true);
  };

  const handleCloseDialog = () => {
    setEnlarged(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Home Page!
      </Typography>

      {/* First Input and Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
        <TextField fullWidth label="Enter your prompt" variant="outlined" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <Button variant="contained" color="primary" startIcon={<GenerateIcon />} onClick={generatePrompt}>
          Generate Prompt
        </Button>
        <Button variant="contained" color="secondary" startIcon={<ImageIcon />} onClick={handleGenerateImage}>
          Generate Image
        </Button>
      </Box>

      {/* Second Input (non-editable) */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField fullWidth label="Generated Image" variant="outlined" value={image} readOnly />
      </Box>

      {/* Divider */}
      <Divider sx={{ marginY: 3 }} />

      {/* Below Divider - Layout with Prompt Text, Image Placeholder and Buttons */}
      <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
        {/* Left Section: Prompt Text */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Prompt
          </Typography>
          <Typography variant="body1" paragraph>
            Enter your desired prompt for the image generation here. This text is displayed as a paragraph, and you can modify it for additional context or instructions.
          </Typography>
          {/* Download and Upload buttons */}
          <Box sx={{ display: "flex", marginTop: "auto", gap: 1 }}>
            <Button variant="contained" color="primary" startIcon={<DownloadIcon />}>
              Download
            </Button>
            <Button variant="contained" color="secondary" startIcon={<UploadIcon />}>
              Upload
            </Button>
          </Box>
        </Box>

        {/* Right Section: Image Placeholder */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              width: 300,
              height: 300,
              border: "1px solid #ccc",
              marginBottom: 2,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleImageClick}>
            <Typography variant="body2" color="textSecondary">
              300x300 Placeholder
            </Typography>
          </Box>

          {/* Enlarged Image Dialog */}
          <Dialog open={isEnlarged} onClose={handleCloseDialog}>
            <DialogTitle>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseDialog}
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}>
                <CloseIcon />
              </IconButton>
              Enlarge Image
            </DialogTitle>
            <DialogContent sx={{ textAlign: "center" }}>
              <img src="https://via.placeholder.com/300" alt="Enlarged" style={{ width: "80%", height: "auto" }} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
