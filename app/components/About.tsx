import {
  Container,
  Typography,
  Box,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import AboutCard from "./AboutCard";
import MobileAboutCard from "./MobileAboutCard";
import AboutAccordion from "./AboutAccordion";

export const toolIcons = [
  {
    title: "Git",
    url: "/assets/Git.svg",
  },
  {
    title: "Github",
    url: "/assets/Github-Dark.svg",
  },
  {
    title: "MaterialUI",
    url: "/assets/MaterialUI-Dark.svg",
  },
  {
    title: "MongoDB",
    url: "/assets/MongoDB.svg",
  },
  {
    title: "Vercel",
    url: "/assets/Vercel-Dark.svg",
  },
  {
    title: "VSCode",
    url: "/assets/VSCode-Dark.svg",
  },
];

const About = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { md: 27, xs: 10 },
          mb: { md: 8, xs: 3 },
        }}
      >
        <Typography
          id="about"
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
          display: { sm: "flex", xs: "none" },
          flexDirection: { sm: "row", xs: "column" },
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: { sm: 280, xs: 180 },
            height: { sm: 340, xs: 240 },
            borderRadius: 3,
            mb: { md: 2, sm: 6 },
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
              pb: { sm: 2, md: 6 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit
            dolorum commodi praesentium libero blanditiis! Quisquam ad inventore
            suscipit ratione doloremque, velit at ea incidunt? Labore fugit
            deserunt animi magni.
          </Typography>
          <AboutCard />
          <AboutAccordion />
          <Typography>Tools I use :</Typography>
          <Box>
            {toolIcons.map((tool, index) => (
              <Tooltip key={index} title={tool.title}>
                <IconButton sx={{ width: 38, height: 38, p: 0.3, mr: 1 }}>
                  <img src={tool.url} alt="tool" />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
      <MobileAboutCard />
    </Container>
  );
};

export default About;
