import React from "react";
import { Container, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">Learn more about this application.</Typography>
    </Container>
  );
};

export default About;
