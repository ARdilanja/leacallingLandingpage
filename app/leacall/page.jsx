import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import "../leacall/leacall.css";

const LeaCall = () => {
  return (
    <Box className="leaContainer">
      <Grid container alignItems="center">
        <Grid className="lea-col1">
          <Box>
            <Typography variant="h5" className="leaTitle">
              What is <span className="highlight">LEA Calling?</span>
            </Typography>
          </Box>
        </Grid>
        <Grid className="lea-col2">
          <Typography variant="body1" className="leaText">
            Instead of HR teams spending hours calling candidates, LEA Calling
            automates the process. Our AI-powered system makes real-time phone
            calls using a natural human voice to screen candidates, collect key
            details, and gauge interest in job roles. Whether candidates have
            applied or not, AI does the outreach—so you only focus on those who
            are truly interested and qualified.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeaCall;