import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import MobileMenu from "./MobileMenu";
import { lists } from "./DrawerList";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 5,
              display: "flex",
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: blueGrey[900],
              textDecoration: "none",
            }}
          >
            Valeria
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {lists.map((list) => (
              <Link
                href={`# ${list.link}`}
                underline="hover"
                key={list.page}
                sx={{
                  my: 2,
                  mx: 2.8,
                  color: blueGrey[900],
                  display: "block",
                  fontFamily: "outfit",
                }}
              >
                {list.page}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ mx: 2 }}>
              <DarkModeOutlinedIcon sx={{ color: blueGrey[500] }} />
            </IconButton>
            <MobileMenu />
            <Tooltip title="Open settings">
              <Button
                component={Link}
                href="#contact"
                sx={{
                  p: 1,
                  fontFamily: "inherit",
                  color: blueGrey[900],
                  borderColor: blueGrey[500],
                  display: { xs: "none", md: "inline-flex" },
                }}
                variant="outlined"
                endIcon={<ArrowOutwardOutlinedIcon />}
              >
                Contact
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
