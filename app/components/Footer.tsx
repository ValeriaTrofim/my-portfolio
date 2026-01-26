import { BottomNavigation, Box, Link } from "@mui/material";

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
    <BottomNavigation
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {lists.map((list) => (
        <Link
          key={list.page}
          href={list.link}
          underline="hover"
          target="_blank"
          color="secondary"
          sx={{
            my: 2,
            mx: 2.7,
            display: "block",
            fontFamily: "outfit",
          }}
        >
          {list.page}
        </Link>
      ))}
    </BottomNavigation>
  );
};

export default Footer;
