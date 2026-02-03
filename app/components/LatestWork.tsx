"use client";
import { Box, Container, Typography } from "@mui/material";
import { ImageBackdrop, ImageSrc, Image, ImageButton } from "../src/styled";

const images = [
  {
    url: "/assets/project1.jpg",
    link: "https://game-catalog-sooty.vercel.app/",
    title: "Game Catalog",
    width: "30%",
  },
  {
    url: "/assets/project3.jpg",
    link: "https://quiz-app-gray-five.vercel.app/",
    title: "Quiz App",
    width: "30%",
  },
  {
    url: "/assets/project2.jpg",
    link: "https://issue-tracker-sand-seven.vercel.app/",
    title: "Issue Tracker",
    width: "30%",
  },
];

const LatestWork = () => {
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
          id="work"
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h5", xs: "h6" },
          }}
        >
          My Portfolio
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h3", xs: "h4" },
            textAlign: "center",
          }}
        >
          My latest work
        </Typography>
        <Typography
          sx={{ textAlign: "center", typography: { sm: "h6", xs: "body1" } }}
        >
          Welcome to my web development portfolio! Check out the front-end
          projects I’ve been building on my learning journey.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          justifyContent: "center",
        }}
      >
        {images.map((image) => (
          <ImageButton
            target="_blank"
            href={image.link}
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Container>
  );
};

export default LatestWork;
