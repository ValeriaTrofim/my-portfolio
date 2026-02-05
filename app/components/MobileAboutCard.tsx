import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { toolIcons } from "./About";
import AboutAccordion from "./AboutAccordion";

const MobileAboutCard = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 270 }}
          image="/assets/avatar.jpg"
          title="valeria trofim"
        />
        <CardContent>
          <Typography variant="body1" sx={{ fontFamily: "inherit", mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit
            dolorum commodi praesentium libero blanditiis! Quisquam ad inventore
            suscipit ratione doloremque, velit at ea incidunt? Labore fugit
            deserunt animi magni.
          </Typography>
          <AboutAccordion />
          <Typography variant="body1" sx={{ fontFamily: "inherit" }}>
            Tools I use :
          </Typography>
          <Box>
            {toolIcons.map((tool, index) => (
              <IconButton
                key={index}
                sx={{ width: 28, height: 28, p: 0, mr: 1 }}
              >
                <img src={tool.url} alt="tool" />
              </IconButton>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MobileAboutCard;
