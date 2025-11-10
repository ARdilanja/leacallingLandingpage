"use client";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../problemsolving/problemsolving.css";

const problems = [
  {
    id: 1,
    title: "Time-Consuming Manual Calls",
    description:
      "HR teams spend hours calling candidates for initial screenings.",
    image: "/images/calendar.png",
  },
  {
    id: 2,
    title: "Missed Connections",
    description:
      "Candidates don’t always pick up, leading to multiple follow-ups and wasted effort.",
    image: "/images/Missed.png",
  },
  {
    id: 3,
    title: "Slow Hiring Process",
    description:
      "Delays in screening lead to longer hiring cycles, slowing down recruitment.",
    image: "/images/slow.png",
  },
  {
    id: 4,
    title: "Low Candidate Engagement",
    description:
      "Many potential candidates drop off due to lack of quick follow-ups.",
    image: "/images/low.png",
  },
  {
    id: 5,
    title: "High Hiring Costs",
    description:
      "Traditional screening calls require more resources and staffing.",
    image: "/images/high.png",
  },
];

export default function ProblemsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToIndex = (index) => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      const cardWidth = scrollEl.clientWidth * 0.85;
      scrollEl.scrollTo({
        left: index * (cardWidth + 16),
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const newIndex = Math.min(prev + 1, problems.length - 1);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const handleScroll = () => {
      const scrollLeft = scrollEl.scrollLeft;
      const cardWidth = scrollEl.clientWidth * 0.85;
      const index = Math.round(scrollLeft / (cardWidth + 16));
      setActiveIndex(index);
    };

    scrollEl.addEventListener("scroll", handleScroll);
    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="problems-container">
      <Typography variant="h3" className="problems-title">
        Problems we are solving
      </Typography>

      <div className="desktop-view">
        <Grid container spacing={4} justifyContent="center" className="problem-row">
          {problems.slice(0, 3).map((problem) => (
            <Grid item xs={12} sm={6} md={4} key={problem.id}>
              <Card className="problem-card">
                <CardContent className="problem-content">
                  <div>
                    <Typography variant="h6" className="problem-title">
                      {problem.title}
                    </Typography>
                    <Typography variant="body2" className="problem-description">
                      {problem.description}
                    </Typography>
                  </div>
                  <div className="image-wrapper">
                    <Image
                      src={problem.image}
                      alt={problem.title}
                      width={140}
                      height={100}
                      className="problem-image"
                    />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} justifyContent="center" className="problem-row">
          {problems.slice(3, 5).map((problem) => (
            <Grid item xs={12} sm={6} md={4} key={problem.id}>
              <Card className="problem-card-1">
                <CardContent className="problem-content-row2">
                  <div className="text-section">
                    <Typography variant="h6" className="problem-title-1">
                      {problem.title}
                    </Typography>
                    <Typography variant="body2" className="problem-description-1">
                      {problem.description}
                    </Typography>
                  </div>
                  <div className="image-wrapper-1">
                    <Image
                      src={problem.image}
                      alt={problem.title}
                      width={160}
                      height={120}
                      className="problem-image-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="mobile-scroll">
        <div className="scroll-controls">
          <IconButton onClick={handlePrev} className="arrow-btn">
            <ArrowBackIosNewIcon className="arrow-icon" />
          </IconButton>

          <div className="scroll-container" ref={scrollRef}>
            {problems.map((problem, index) => (
              <Card
                key={problem.id}
                className={`mobile-card ${activeIndex === index ? "active" : ""}`}
              >
                <CardContent>
                  <Typography variant="h6" className="problem-title-2">
                    {problem.title}
                  </Typography>
                  <Typography variant="body2" className="problem-description-2">
                    {problem.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>

          <IconButton onClick={handleNext} className="arrow-btn">
            <ArrowForwardIosIcon className="arrow-icon" />
          </IconButton>
        </div>

        <div className="scroll-indicators">
          {problems.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
