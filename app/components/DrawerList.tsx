import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const lists = [
  {
    page: "Home",
    link: "top",
  },
  {
    page: "About me",
    link: "about",
  },
  {
    page: "Services",
    link: "services",
  },
  {
    page: "My work",
    link: "work",
  },
  {
    page: "Contact me",
    link: "contact",
  },
];

const DrawerList = () => {
  return (
    <List>
      {lists.map((list) => (
        <ListItem key={list.page} disablePadding>
          <ListItemButton component={Link} href={`#${list.link}`}>
            <ListItemText primary={list.page} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerList;
