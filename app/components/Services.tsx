"use client";
import {
  Box,
  ButtonProps,
  Card,
  CardContent,
  Container,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import CodeIcon from "@mui/icons-material/Code";
import { pink } from "@mui/material/colors";

const ColorButton = styled(IconButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(pink[400]),
  backgroundColor: pink[400],
  "&:hover": {
    backgroundColor: pink[400],
  },
}));

const services = [
  {
    id: 1,
    title: "UI/UX Implementation",
    description:
      "Translating design mockups into live, interactive web pages using HTML, CSS, and JavaScript",
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Ensuring sites look and function perfectly on desktops, tablets, and mobile phones.",
  },
  {
    id: 3,
    title: "Performance Optimization: ",
    description:
      "Improving website loading times, interactivity, and overall speed.",
  },
  {
    id: 4,
    title: "Cross-Browser/Device Testing",
    description:
      "Making sure applications work consistently across different browsers and operating systems.",
  },
];

const Services = () => {
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
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h5", xs: "h6" },
          }}
        >
          What I offer
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            typography: { sm: "h3", xs: "h4" },
            textAlign: "center",
          }}
        >
          My Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {services.map((service) => (
            <Card key={service.id} sx={{ maxWidth: 275, m: 3, minWidth: 200 }}>
              <CardContent>
                <ColorButton
                  sx={{
                    width: 32,
                    height: 32,
                    mb: 2,
                    borderRadius: 1,
                  }}
                >
                  <CodeIcon sx={{ color: "white" }} />
                </ColorButton>
                <Typography
                  sx={{
                    fontFamily: "outfit",
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "outfit",
                    color: blueGrey[500],
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Services;
