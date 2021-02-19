import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import theme from "../../utils/theme";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  white: {
    color: theme.palette.white,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.white,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navbar: {
    background: theme.palette.background,
  },
  navbarLarge: {
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
    },
  },
  navs: {
    color: theme.palette.white,
    "&+&": {
      paddingLeft: "12px",
    },
  },
  displayNone: {
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const navs = [
    { name: "關於我", href: "#aboutMe" },
    { name: "我的作品", href: "#project" },
    { name: "我的經歷", href: "#experience" },
    { name: "我們 BLOG", href: "#blog" },
    { name: "與我聯繫", href: "#contactMe" },
  ];
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
  }, []);
  const handleOnScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  const handleToggleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        className={
          (clsx(classes.appBar, {
            [classes.appBarShift]: open,
          }),
          isScroll && classes.navbar)
        }
        color="transparent"
        elevation={0}
        onScroll={handleOnScroll}
        isScroll={isScroll}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawerOpen}
            edge="start"
            className={
              (clsx(classes.menuButton, open && classes.hide),
              classes.displayNone)
            }
          >
            <MenuIcon style={{ color: "rgba(255,255,255)" }} />
          </IconButton>
          <Typography
            className={classes.navbarLarge}
            variant="h6"
            color="white"
          >
            {navs.map((nav, index) => (
              <Link href={nav.href} className={classes.navs} key={index}>
                {nav.name}
              </Link>
            ))}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleToggleDrawerOpen}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navs.map((nav, index) => (
            <ListItem button href={nav.href} key={nav.name}>
              <Link
                href={nav.href}
                className={classes.white}
                onClick={handleToggleDrawerOpen}
              >
                <Typography variant="subtitle1" color="primary">
                  {nav.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
