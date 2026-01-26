"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { cards } from "./AboutCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutAccordion = () => {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}>
      {cards.map((card) => (
        <Accordion key={card.id} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box color="secondary" sx={{ mr: 1 }}>
              {card.Icon}
            </Box>
            <Typography
              sx={{
                fontFamily: "outfit",
              }}
            >
              {card.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="primary"
              sx={{
                fontFamily: "outfit",
              }}
            >
              {card.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AboutAccordion;
