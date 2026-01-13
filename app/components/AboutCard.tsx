import {
  Typography,
  Box,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { blueGrey } from "@mui/material/colors";

const cards = [
  {
    id: 1,
    Icon: <CodeOffIcon />,
    title: "Languages",
    description: "HTML, CSS, JavaScript, TypeScript, React Js, Next Js",
  },
  {
    id: 2,
    Icon: <SchoolIcon />,
    title: "Education",
    description: "BSc in Economic History, Economy and Society",
  },
  {
    id: 3,
    Icon: <WorkOutlineIcon />,
    title: "Projects",
    description:
      "Built dynamic, responsive projects with clean, maintainable code.",
  },
];

const AboutCard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {cards.map((card) => (
        <Card sx={{ maxWidth: 275, mr: 3, mb: 3, minWidth: 200 }} key={card.id}>
          <CardActionArea>
            <CardContent>
              <Box sx={{ color: blueGrey[900] }}>{card.Icon}</Box>
              <Typography
                sx={{
                  fontFamily: "outfit",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "outfit",
                  color: blueGrey[500],
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default AboutCard;
