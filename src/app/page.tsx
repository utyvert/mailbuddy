"use client";

import React, { useState } from "react";
import { Button, Grid, TextField, Select, MenuItem } from "@mui/material";
import { Inter } from "@next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  

  const [to, setTo] = useState("");
  const [context, setContext] = useState("");
  const [purpose, setPurpose] = useState("");
  const [additionalTopics, setAdditionalTopics] = useState("");
  const [length, setLength] = useState("short");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        context,
        purpose,
        additionalTopics,
        length,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.output);
      }
      );
      
  };

  return (
    <div style={classes.root}>
      <Grid container style={classes.formContainer}>
        <TextField
          sx={{ input: { color: 'white' }, label: { color: 'lightgrey' } }}
          label="To"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          sx={{ input: { color: 'white' }, label: { color: 'lightgrey' } }}
          label="Context"
          value={context}
          onChange={(event) => setContext(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          sx={{ input: { color: 'white' }, label: { color: 'lightgrey' } }}
          label="Purpose"
          value={purpose}
          onChange={(event) => setPurpose(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          sx={{ input: { color: 'white' }, label: { color: 'lightgrey' } }}
          label="Additional Topics"
          value={additionalTopics}
          onChange={(event) => setAdditionalTopics(event.target.value)}
          fullWidth
          margin="normal"
        />
        <Select
          label="Length"
          value={length}
          onChange={(event) => setLength(event.target.value)}
          fullWidth
          margin="normal"
          defaultValue="short"
          sx={{color: 'lightgrey', marginTop: '1rem' }}
        >
          <MenuItem value="short">Short</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="long">Long</MenuItem>
        </Select>
        <Button
          variant="contained"
          style={classes.button}
          onClick={handleGenerate}
        >
          Generate
        </Button>
      </Grid>
      <Grid container style={classes.textDisplay}>
        {output && (
          <p style={classes.text}> 
            {output}
          </p>
        )}
      </Grid>
    </div>
  );
}


const classes = {
  root: {
    fontFamily: "Inter",
    padding: "10rem",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    backgroundColor: "#0D1B2A",
  },
  formContainer: {
    flex: 1,
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
    maxWidth: "50rem",
    width: "100%",
    backgroundColor: "#415A77",
    color: "white",
  },
  textDisplay: {
    border: "1px solid #415A77",
    borderStyle: 'solid solid solid none',
    maxWidth: "50rem",
    width: "100%",
    padding: "2rem",
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "#778DA9",
    color: "white",
    marginTop: "1rem",
  },
};
