import React from "react";
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.white,
    padding: "24px 0 72px",
  },
  title: {
    padding: "6px 0 12px",
  },
  whiteLink: {
    color: theme.palette.white,
  },
}));
export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" color="inherit">
        與我聯絡
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <EmailIcon style={{ color: "rgba(255,255,255)" }} />
          </ListItemIcon>
          <ListItemText primary="Email: ss121549@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon style={{ color: "rgba(255,255,255)" }} />
          </ListItemIcon>
          <ListItemText primary="Phone: 0958-252-069" />
        </ListItem>
        <ListItem
          component="a"
          href="https://github.com/SimonOneNineEight"
          className={classes.whiteLink}
        >
          <ListItemIcon>
            <GitHubIcon style={{ color: "rgba(255,255,255)" }} />
          </ListItemIcon>
          <ListItemText primary="GitHub: https://github.com/SimonOneNineEight" />
        </ListItem>
      </List>
    </div>
  );
}
