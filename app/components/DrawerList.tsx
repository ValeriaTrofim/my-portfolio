import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const pages = ["Home", "About me", "Services", "My work", "Contact me"];

const DrawerList = () => {
  return (
    <List>
      {pages.map((page) => (
        <ListItem key={page} disablePadding>
          <ListItemButton>
            <ListItemText primary={page} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerList;
