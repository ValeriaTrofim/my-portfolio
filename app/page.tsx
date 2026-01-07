import { Avatar, Container } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Avatar
          alt="Valeria Trofim"
          src="/assets/avatar.jpg"
          sx={{ width: 98, height: 98, m: "auto", my: 7 }}
        />
      </Container>
    </>
  );
}
