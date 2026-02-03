"use client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const Connect = () => {
  const [result, setResult] = useState("Submit Now");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string;

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted");
      event.target.reset();
    } else {
      console.log(data.message, data);
      setResult("Error");
    }
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { md: 27, xs: 10 },
          mb: { md: 5, xs: 3 },
        }}
      >
        <Typography
          id="contact"
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h5", xs: "h6" },
          }}
        >
          Connect with me
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h3", xs: "h4" },
            textAlign: "center",
          }}
        >
          Get in touch
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            typography: { sm: "h6", xs: "body1" },
            mb: 3,
          }}
        >
          I’d love to hear from you! Feel free to send any questions, comments,
          or feedback through the form below.
        </Typography>
        <Box>
          <form onSubmit={onSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
                <TextField
                  required
                  autoComplete="off"
                  id="name"
                  name="name"
                  label="Enter your name"
                  variant="outlined"
                  color="primary"
                />
              </Box>
              <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
                <TextField
                  required
                  autoComplete="off"
                  id="email"
                  name="email"
                  label="Enter your email"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box sx={{ m: 1, display: "flex", justifyContent: "center" }}>
              <TextField
                sx={{ width: { sm: 515, xs: 250 } }}
                rows={4}
                multiline
                autoComplete="off"
                required
                label="Enter your message"
                name="message"
                id="message"
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  m: 1,
                  mb: 3,
                  fontFamily: "inherit",
                  borderColor: "primary",
                  bgcolor: "primary",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                {result}
              </Button>
            </Box>
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "secondary",
          }}
        >
          <Typography noWrap>
            <EmailIcon color="secondary" sx={{ mr: 1 }} />
            valeria.trofim@gmail.com
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default Connect;
