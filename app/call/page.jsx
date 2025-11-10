"use client";

import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button, Alert } from "@mui/material";
import "../call/call.css";
import axios from "axios";

export default function CallPage() {

    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        phoneNumber: "",
        organizationName: "",
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "", message: "" });
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/api/lea-preview", formData);

            if (response.data.success) {
                console.log("✅ Form stored successfully:", response.data.data);
                setStatus({ type: "success", message: response.data.message || "Form submitted successfully!" });

                setFormData({
                    fullName: "",
                    workEmail: "",
                    phoneNumber: "",
                    organizationName: "",
                });
            } else {
                setStatus({ type: "error", message: response.data.message || "Something went wrong." });
            }
        } catch (error) {
            console.error("❌ Axios Error:", error.response?.data || error.message);

            // ✅ If backend sent a clear validation message
            if (error.response?.data?.message) {
                setStatus({ type: "error", message: error.response.data.message });
            } else {
                // Generic fallback
                setStatus({
                    type: "error",
                    message: "Server error — please check backend or network connection.",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box className="request-page-root">
            <Box className="container">
                <Typography className="main-title">
                    Try LEA Calling - Get an AI-Powered Preview Call!
                </Typography>

                <Typography className="subtitle">
                    Curious to see how LEA Calling works? Experience a quick AI-powered
                    preview call and hear how it engages candidates with human-like
                    conversations.
                </Typography>

                <Box className="steps-area">
                    <span className="progress-line" />

                    {/* Dots */}
                    <span className="step-dot dot-1">1</span>
                    <span className="step-dot dot-2">2</span>
                    <span className="step-dot dot-3">3</span>

                    <span className="step-caption cap-1">Fill in your details below</span>
                    <span className="step-caption cap-2">Receive a preview AI call on your phone</span>
                    <span className="step-caption cap-3">Experience how LEA screens candidates in real-time</span>
                </Box>

                <Typography className="section-title">
                    See AI-Powered Hiring in Action - Try It Now!
                </Typography>

                <Box component="form" className="request-form" noValidate onSubmit={handleSubmit}>

                    {status.message && (
                        <Alert severity={status.type} sx={{ mb: 2 }}>
                            {status.message}
                        </Alert>
                    )}

                    <Grid container spacing={3} columns={12} className="form-row">
                        <Grid item xs={12} sm={6}>
                            <label className="form-label">
                                Full Name<span className="required">*</span>
                            </label>
                            <TextField
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <label className="form-label">
                                Work email<span className="required">*</span>
                            </label>
                            <TextField
                                name="workEmail"
                                placeholder="Enter your work email"
                                value={formData.workEmail}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} columns={12} className="form-row">
                        <Grid item xs={12} sm={6}>
                            <label className="form-label">
                                Phone number<span className="required">*</span>
                            </label>
                            <TextField
                                type="number"
                                name="phoneNumber"
                                placeholder="+91 -"
                                value={formData.phoneNumber}
                                onChange={(e) => {
                                    if (e.target.value.length <= 10) {
                                        setFormData({ ...formData, phoneNumber: e.target.value });
                                    }
                                }}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <label className="form-label">
                                Organization name<span className="required">*</span>
                            </label>
                            <TextField
                                name="organizationName"
                                placeholder="Enter your organization name"
                                value={formData.organizationName}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <Box className="button-container">
                        <Button type="submit" className="submit-button" disableRipple disabled={loading}>
                            {loading ? "Submitting..." : "Request AI Preview Call"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

