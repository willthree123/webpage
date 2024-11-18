import React from "react";
import { Container, Typography } from "@mui/material";

const Library: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Library Page
      </Typography>
      <Typography variant="body1">Explore our collection in the Library.</Typography>
    </Container>
  );
};

export default Library;
