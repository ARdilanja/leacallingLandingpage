"use client";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Box,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../public/logo/Asset_4.png";
import MobileLogo from "../../public/logo/mobile-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../home/header.css";

export default function Header() {
  return (
    <AppBar position="fixed" className="recroot-header-appbar">
      <Container maxWidth="lg" className="recroot-header-container">
        <Toolbar disableGutters className="recroot-header-toolbar">
          <Box className="recroot-header-allnav">
            <Box className="recroot-header-logo desktop-logo">
              <Image
                src={Logo}
                alt="Recroot Logo"
                width={108}
                height={24}
                priority
              />
            </Box>
            <Box className="recroot-header-logo mobile-logo">
              <Image
                src={MobileLogo}
                alt="Recroot Mobile Logo"
                width={112}
                height={25}
                priority
              />
            </Box>

            <Box className="recroot-header-nav">
              <Button className="recroot-header-nav-item">
                Features <KeyboardArrowRightIcon fontSize="small" />
              </Button>
              <Button className="recroot-header-nav-item">
                Use Cases <KeyboardArrowRightIcon fontSize="small" />
              </Button>
              <Button className="recroot-header-nav-item">Pricing</Button>
              <Button className="recroot-header-nav-item">About us</Button>
            </Box>
          </Box>

          <Box className="recroot-header-auth">
            <Button className="recroot-header-login">
              Login <KeyboardArrowRightIcon fontSize="small" />
            </Button>
            <Button className="recroot-header-login">Signup</Button>
          </Box>

          <IconButton className="recroot-header-hamburger">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}