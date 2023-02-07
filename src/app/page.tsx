"use client";

import React, { useState } from "react";
import { Button, Grid, TextField, Select, MenuItem, Input } from "@mui/material";
import { Inter } from "@next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  

  const [to, setTo] = useState("");
  const [context, setContext] = useState("");
  const [purpose, setPurpose] = useState("");
  const [tone, setTone] = useState("");
  const [length, setLength] = useState("short");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const handleGenerate = () => {

    setOutput('Generating email...')
    setIsLoading(true)

    console.log("Generating email...");
    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        context,
        purpose,
        tone,
        length,
        apiKey,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.output);
      }
      );

      setIsLoading(false);
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
        />
        <TextField
          sx={{ input: { color: 'white' }, label: { color: 'lightgrey' } }}
          label="Context"
          value={context}
          onChange={(event) => setContext(event.target.value)}
          fullWidth
        />
        <TextField
          sx={{ input: { color: 'white' }, label: { color: 'lightgrey' } }}
          label="Purpose"
          value={purpose}
          onChange={(event) => setPurpose(event.target.value)}
          fullWidth
        />
        <TextField
          sx={{ input: { color: 'white' }, label: { color: 'lightgrey' } }}
          label="Tone"
          value={tone}
          onChange={(event) => setTone(event.target.value)}
          fullWidth
        />
        <Select
          label="Length"
          value={length}
          onChange={(event) => setLength(event.target.value)}
          fullWidth
          defaultValue="short"
          sx={{color: 'lightgrey'}}
        >
          <MenuItem value="short">Short</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="long">Long</MenuItem>
        </Select>
        <TextField
        onChange={(event) => setApiKey(event.target.value)}
        value={apiKey}
        label='API Key'
        variant="outlined"
        />
        <Button
          variant="contained"
          style={classes.button}
          onClick={() => handleGenerate()}
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
    flexWrap: 'nowrap'
  },
  formContainer: {
    gap: "1.5rem",
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    maxWidth: "50rem",
    width: "100%",
    backgroundColor: "#415A77",
    color: "white",
    flexWrap: 'nowrap',
    borderRadius: '5px'
  },
  textDisplay: {
    flex: 1,
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
    maxWidth: "50rem",
    width: "100%",
    color: "white",
    flexWrap: 'nowrap',
    border: '1px solid white',
    borderStyle: 'solid solid solid none',
    overflowY: 'auto',
  },
  text: {
    color: "white",
    whiteSpace: 'pre-wrap'
  },
  button: {
    backgroundColor: "#778DA9",
    color: "white",
    marginTop: "1rem",
  },
};
