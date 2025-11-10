"use client";
import {
  Container,
  Typography,
  Button,
  Box,
  Modal,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import TwoMen from "../../public/images/herosection.png";
import "../home/herosection.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box className="recroot-hero-wrapper">
      <Container maxWidth="lg" className="recroot-hero-container">
        <Box className="recroot-hero-text">
          <Box className="recroot-hero-textbox">
            <Typography variant="h2" className="recroot-hero-title">
              Automated Candidate Calls for <br />
              <Box component="span" className="recroot-hero-highlight">
                Hassle-Free Hiring
              </Box>
            </Typography>

            <Typography className="recroot-hero-subtitle">
              Skip the endless calls—LEA Calling screens candidates fast, saving
              time and cutting costs!
            </Typography>

            <Button
              variant="contained"
              className="recroot-hero-demo-btn"
              onClick={handleOpen}
            >
              {" "}
              <PlayArrowOutlinedIcon className="recroot-hero-watchdemo-icon" />
              Watch Demo
            </Button>
          </Box>

          <Box className="recroot-hero-image-box">
            <Image
              src={TwoMen}
              alt="Candidate calling automation"
              width={800}
              height={500}
              className="recroot-hero-image"
              priority
            />
          </Box>
        </Box>
      </Container>
      <Modal open={open} onClose={handleClose} aria-labelledby="demo-video">
        <Box className="recroot-video-modal">
          <Box className="recroot-video-wrapper">
            <IconButton className="recroot-video-close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <video
              src="/video/demo.mp4"
              controls
              autoPlay
              className="recroot-video-player"
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}