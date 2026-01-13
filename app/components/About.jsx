import { Container, Typography, Box, Avatar, IconButton } from "@mui/material";
import AboutCard from "./AboutCard";

const toolIcons = [
  "/assets/Git.svg",
  "/assets/Github-Dark.svg",
  "/assets/MaterialUI-Dark.svg",
  "/assets/MongoDB.svg",
  "/assets/Vercel-Dark.svg",
  "/assets/VSCode-Dark.svg",
];

const About = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 27,
          mb: 8,
        }}
      >
        <Typography
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h5", xs: "h6" },
          }}
        >
          Introduction
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h3", xs: "h4" },
            textAlign: "center",
          }}
        >
          About me
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: { sm: 280, xs: 180 },
            height: { sm: 340, xs: 240 },
            borderRadius: 3,
            mb: 2,
          }}
          alt="Valeria Trofim"
          src="/assets/avatar.jpg"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: { sm: 5, xs: 1 },
            width: { sm: "60%", xs: "90%" },
            flexGrow: 1,
            pr: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              typography: { sm: "body1", md: "h6", xs: "h6" },
              pb: 5,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit
            dolorum commodi praesentium libero blanditiis! Quisquam ad inventore
            suscipit ratione doloremque, velit at ea incidunt? Labore fugit
            deserunt animi magni.
          </Typography>
          <AboutCard />
          <Typography>Tools I use :</Typography>
          <Box>
            {toolIcons.map((tool) => (
              <IconButton
                key={tool}
                src={tool}
                sx={{ width: 38, height: 38, p: 0, mr: 1 }}
              >
                <img src={tool} alt="tool" />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
