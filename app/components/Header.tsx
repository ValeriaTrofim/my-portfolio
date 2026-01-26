import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 7,
        }}
      >
        <Avatar
          id="top"
          alt="Valeria Trofim"
          src="/assets/avatar.jpg"
          sx={{ width: 98, height: 98 }}
        />
        <Typography
          sx={{
            fontFamily: "inherit",
            p: 2,
            typography: { sm: "h5", xs: "h6" },
          }}
        >
          Hi! My name is Valeria Trofim.
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            p: 2,
            typography: { sm: "h3", xs: "h4" },
            textAlign: "center",
          }}
        >
          frontend web developer based in Malmo.
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          I am a beginner frontend developer from Moldova who aims to build web
          applications that are seamless, visually compelling, and can resonate
          with users.
        </Typography>
        <Box>
          <Button
            variant="outlined"
            component={Link}
            href="#contact"
            color="secondary"
            sx={{
              m: 2,
              fontFamily: "inherit",
              borderColor: "primary",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Contact me
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/assets/valeria-trofim-resume.pdf"
            download
            sx={{
              fontFamily: "inherit",
              color: "#fff",
              borderColor: "primary",
              bgcolor: "primary",
            }}
            endIcon={<ArrowDownwardIcon />}
          >
            My resume
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
