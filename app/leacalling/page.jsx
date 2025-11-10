"use client";
import Image from "next/image";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import "./leacalling.css";

export default function LeaCalling() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const cards = [
    {
      title:
        "Employers who need to quickly screen applicants for a job role without spending hours on phone calls.",
      img: "/images/Leacalling_1.png",
      alt: "Screening applicants",
      icon: "/images/Vector.png",
    },
    {
      title:
        "Businesses looking to reach potential candidates who haven't applied yet and check their interest.",
      img: "/images/Leacalling_2.png",
      alt: "Team collaboration",
      icon: "/images/Vector_1.png",
    },
    {
      title:
        "High-volume hiring teams that need a fast, structured way to engage workers at scale.",
      img: "/images/Leacalling_3.png",
      alt: "High-volume hiring",
      icon: "/images/Vector_2.png",
    },
  ];

  return (
    <Box className="lea-container">
      <Box className="lea-wrapper">
        <Typography variant="h3" className="lea-title">
          Who is LEA Calling for?
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          className="lea-grid"
        >
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="lea-card">
                {!isMobile && (
                  <Box className="lea-image-wrapper">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="lea-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </Box>
                )}

                <Box className="lea-card-content">
                  {isMobile && (
                    <Box className="lea-icon-wrapper">
                      <Image
                        src={card.icon}
                        alt={card.alt}
                        width={40}
                        height={40}
                        className="lea-icon"
                        priority={index === 0}
                      />
                    </Box>
                  )}

                  <Typography className="lea-card-text">{card.title}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
