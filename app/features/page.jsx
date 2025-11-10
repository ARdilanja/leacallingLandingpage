"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./features.css";

export default function Page() {
    const [activeStep, setActiveStep] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    // ✅ Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const steps = [
        {
            id: 1,
            label: "Before the interview",
            image: "/images/before.png", // desktop image
            mobileImage: "/images/mobile_before.png", 
            features: [
                {
                    title: "Bulk Outreach",
                    desc: "Employers can upload candidate lists and schedule calls in minutes.",
                },
                {
                    title: "Trainable AI Voice & Accent",
                    desc: "Customize AI to match different voice accents for better engagement.",
                },
                {
                    title: "Interest-Based Calls",
                    desc: "Engage candidates who haven't applied yet and check their interest in open roles.",
                },
            ],
        },
        {
            id: 2,
            label: "During the interview",
            image: "/images/Group.png",
            mobileImage: "/images/mobile_before.png", 
            features: [
                {
                    title: "AI-Driven Screening Calls",
                    desc: "Automatically calls candidates with key questions.",
                },
                {
                    title: "Human-Like AI Conversations",
                    desc: "Engages candidates in a natural, interactive conversation.",
                },
                {
                    title: "AI-Powered Smart Replies",
                    desc: "If candidates have questions during the call, AI responds intelligently in real-time.",
                },
                {
                    title: "Multi-Language Support",
                    desc: "Conduct calls in multiple languages to engage a diverse candidate pool.",
                },
                {
                    title: "Smart Scheduling & Follow-Ups",
                    desc: "AI retries up to 3 times if the call is missed.",
                },
                {
                    title: "AI-Powered Smart Replies",
                    desc: "Candidates can request a callback if busy.",
                },
            ],
        },
        {
            id: 3,
            label: "After the interview",
            image: "/images/Maskgroup.png",
            mobileImage: "/images/mobile_after.png", 
            features: [
                {
                    title: "Automated Screening Reports",
                    desc: "Get call transcripts, AI-generated insights, and role-fit scores for each candidate",
                },
                {
                    title: "Cost-Effective Hiring",
                    desc: "Reduce HR workload without increasing hiring expenses.",
                },
                {
                    title: "Downloadable Reports",
                    desc: "Save and share reports in a convenient format for offline review and record-keeping.",
                },
            ],
        },
    ];

    const ITEM_TOTAL = 64;
    const CIRCLE_CENTER_OFFSET = 12;
    const activeIndex = steps.findIndex((s) => s.id === activeStep);
    const lineTop = useMemo(
        () => activeIndex * ITEM_TOTAL + CIRCLE_CENTER_OFFSET + 25,
        [activeIndex]
    );

    const activeData = steps.find((s) => s.id === activeStep);

    return (
        <Box className="page-wrapper">
            {/* Header */}
            <Box className="header-container">
                <Typography variant="h1" className="header-text">
                    Features that help you <br /> hire better
                </Typography>
            </Box>

            {/* Left Steps */}
            <Box className="steps-container" role="tablist" aria-orientation="vertical">
                {activeIndex >= 0 && activeIndex < steps.length && (
                    <Box
                        className="vertical-line-global"
                        style={{
                            top: `${lineTop}px`,
                            height: `calc(100% - ${lineTop + 20}px)`,
                        }}
                    />
                )}

                {steps.map((step) => {
                    const isActive = activeStep === step.id;
                    return (
                        <Box
                            key={step.id}
                            className={`step-item ${isActive ? "active" : "inactive"}`}
                            onClick={() => setActiveStep(step.id)}
                            tabIndex={0}
                            role="tab"
                            aria-selected={isActive}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") setActiveStep(step.id);
                            }}
                        >
                            <Box className="left-area">
                                {isActive ? (
                                    <Box className="step-circle">{step.id}</Box>
                                ) : (
                                    <Box className="circle-spacer" />
                                )}
                            </Box>

                            <Typography
                                className={`step-label ${isActive ? "step-label-active" : ""}`}
                                noWrap
                            >
                                {step.label}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            {/* Right Content Card */}
            <Box className="content-card">
                <Box className="inner-card">
                    <Typography className="inner-heading">{activeData.label}</Typography>

                    {/* ✅ Just this line changes */}
                    <img
                        src={isMobile ? activeData.mobileImage : activeData.image}
                        alt={activeData.label}
                        className="inner-image"
                    />
                </Box>

                {/* Dynamic 3-per-row features */}
                <Box className={`features-grid ${activeStep === 2 ? "three-grid" : "two-grid"}`}>
                    {activeData.features.map((item, index) => (
                        <Box className="feature-item" key={index}>
                            <Typography className="feature-title">{item.title}</Typography>
                            <Typography className="feature-desc">{item.desc}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}