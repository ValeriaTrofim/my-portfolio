import { Box, Button, Container, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Connect = () => {
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="name"
                label="Enter your name"
                variant="outlined"
                color="primary"
              />
            </Box>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="email"
                label="Enter your email"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box sx={{ m: 1, display: "flex", justifyContent: "center" }}>
            <TextField
              sx={{ width: { sm: 515, xs: 250 } }}
              component="form"
              multiline
              label="Enter your message"
              id="message"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                m: 1,
                mb: 8,
                fontFamily: "inherit",
                borderColor: "primary",
                bgcolor: "primary",
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Submit now
            </Button>
          </Box>
          <Box>
            <Typography
              noWrap
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "secondary",
              }}
            >
              <EmailIcon color="secondary" sx={{ mr: 1 }} />
              valeria.trofim@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Connect;
