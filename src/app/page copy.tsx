"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import React from "react";
import Link from "next/link";
import { Button, createTheme, ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="app-container" style={{ fontFamily: "Inter" }}>
      <div className="horiz" style={styles.main}>
        <div className="navbar mod1" style={styles.navbar}>
          <div className="logo" style={{marginLeft: '20px'}}>
            <Image
              alt=""
              src="/icons8-circled-envelope-100.png"
              width={75}
              height={75}
            />
          </div>
          <div className="nav-items" style={{ flex: "1" }}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <li>
                <ThemeProvider theme={buttonTheme}>
                  <Button color="secondary" variant="contained"
                  style={{marginBottom: '30px'}}>
                    New Email
                  </Button>
                </ThemeProvider>
              </li>
              <li>Projects</li>
              <li>Templates</li>
            </ul>
          </div>
        </div>
        <div className="form mod2" style={styles.mod2}></div>
        <div className="output mod3"></div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'center',
    height: "100vh",
    backgroundColor: "#0D1B2A",
  },
  navbar: {
    flex: 1,
    gap: "3rem",
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100vh",
    maxWidth: "20rem",
    width: "100%",
    backgroundColor: "#415A77",
    color: "white",
  },
  mod2: {
    flex: 1,
    border: "1px solid #8A8A8A",
    borderStyle: "none solid none none",
    maxWidth: "33rem",
    width: "100%",
  },
};

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#415A77",
    },
    secondary: {
      main: "#778DA9",
    },
  },
});
