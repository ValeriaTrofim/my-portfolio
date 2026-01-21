import { BottomNavigation, Box, Link } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const lists = [
  {
    page: "GitHub",
    link: "https://github.com/ValeriaTrofim",
  },
  {
    page: "LinkedIn",
    link: "https://linkedin.com/in/valeria-trofim-492660225",
  },
];

const Footer = () => {
  return (
    <BottomNavigation>
      {lists.map((list) => (
        <Box
          key={list.page}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href={list.link}
            underline="hover"
            target="_blank"
            sx={{
              my: 2,
              mx: 2.7,
              color: blueGrey[900],
              display: "block",
              fontFamily: "outfit",
            }}
          >
            {list.page}
          </Link>
        </Box>
      ))}
    </BottomNavigation>
  );
};

export default Footer;
