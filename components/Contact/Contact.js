import React from "react";
import {
  Container,
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
    backgroundColor: theme.palette.white,
    padding: "24px 0 72px",
  },
  title: {
    padding: "6px 0 30px",
    textAlign: "center",
  },
  blackLink: {
    color: theme.palette.primary.main,
    "&:hover": {
      "text-decoration": "underline",
    },
  },
}));
export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container xl>
        <Typography className={classes.title} variant="h3" color="inherit">
          與我聯繫
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon style={{ color: "rgba(0,0,0)" }} />
            </ListItemIcon>
            <ListItemText primary="Email: ss121549@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon style={{ color: "rgba(0,0,0)" }} />
            </ListItemIcon>
            <ListItemText primary="Phone: 0958-252-069" />
          </ListItem>
          <ListItem
            component="a"
            href="https://github.com/SimonOneNineEight"
            className={classes.blackLink}
          >
            <ListItemIcon>
              <GitHubIcon style={{ color: "rgba(0,0,0)" }} />
            </ListItemIcon>
            <ListItemText primary="GitHub: https://github.com/SimonOneNineEight" />
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
