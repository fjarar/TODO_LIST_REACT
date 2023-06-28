import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import { HomeIcon, SettingsIcon } from "@mui/icons-material";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <HomeIcon />;
      break;
    case "TASKS":
      return <HomeIcon />;
    case "SETTINGS":
      return <SettingsIcon />;
    default:
      return <HomeIcon />;
  }
};

const MenuListItems = ({list}) => {
    const history = useNavigate();

    const navigateTo = (path) =>{
        history(path)
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) => {
                (
                    <ListItem key={index} ButtonBase onClick={()=>navigateTo(path)}>
                        <ListItemIcon>{getIcon()}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                )
            })}
        </List>
    )
}
