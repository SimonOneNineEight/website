import React from "react";
import TypeWriter from "react-typewriter";
import {
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  Container,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "72px 0 72px",
    color: theme.palette.white,
    minHeight: "100vh",
    height: "650px",
    margin: "auto 0",
    [theme.breakpoints.down("md")]: {
      padding: "72px 0 0",
      margin: "0 0 72px",
    },
  },
  center: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  img: {
    width: "60%",
    objectFit: "contain",
    margin: "0 30px 0 auto",
    display: "block",
    paddingBottom: "12px",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },
  info: {
    paddingRight: "30px",
    paddingBottom: "12px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 12px",
    },
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    color: theme.palette.white,
  },
  title: {
    paddingBottom: "12px",
    "-webkit-text-stroke": "1px black",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  expandMore: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.white,
    [theme.breakpoints.down("md")]: {
      bottom: "-50px",
    },
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid
        className={classes.center}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item lg={5} justify="flex-start" alignItems="center" width="40%">
          <img className={classes.img} src="https://i.imgur.com/aHTJJn2.jpg" />
        </Grid>
        <Grid item lg>
          <TypeWriter typing={1} minDelay={100}>
            <div className={classes.title}>
              <Typography variant="h2">I'm 黃晟維 Simon Huang</Typography>
            </div>
            <Typography variant="h6" className={classes.info}>
              工作中接觸數據相關的需求而意外開始寫程式，覺得 coding
              有夠有趣就一頭栽進來開始自學網頁前端；最後以轉職工程師為目標而參加「程式導師實驗計劃第四期」，現在是一個正在努力成長的半路出家型工程師。
            </Typography>
            <List className={classes.flexContainer} disablePadding>
              <ListItem
                component="a"
                href="https://github.com/SimonOneNineEight"
              >
                <ListItemIcon>
                  <GitHubIcon style={{ color: "rgba(255, 255, 255)" }} />
                </ListItemIcon>
              </ListItem>
            </List>
          </TypeWriter>
        </Grid>
      </Grid>
      <a href="#project" className={classes.expandMore}>
        <ArrowDropDownCircleRoundedIcon fontSize="large" />
      </a>
    </Container>
  );
}
