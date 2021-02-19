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
    margin: 0,
    backgroundImage: 'url("https://i.imgur.com/twYQbl7.jpg")',
    backgroundRepeat: "no-repeat",
    backGroundPosiiton: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      padding: "72px 0 0",
      margin: "0 0 72px",
      backgroundImage: "none",
    },
  },
  detail: {
    width: "45%",
    position: "absolute",
    left: "1%",
    top: "10%",
    padding: "12px",
    borderRadius: "10px",
    backgroundColor: "rgba(0,0,0, 0.3)",
    [theme.breakpoints.down("lg")]: {},
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
    <div className={classes.root}>
      <div className={classes.detail}>
        <TypeWriter typing={1} minDelay={50}>
          <div className={classes.title}>
            <Typography variant="h2">
              <div>I'm 黃晟維</div>
              <div>Simon Huang</div>
            </Typography>
          </div>
        </TypeWriter>
        <Typography variant="h6" className={classes.info}>
          工作中接觸數據相關的需求而意外開始寫程式，覺得 coding
          有夠有趣就一頭栽進來開始自學網頁前端；最後以轉職工程師為目標而參加「程式導師實驗計劃第四期」，現在是一個正在努力成長的半路出家型工程師。
        </Typography>
        <List className={classes.flexContainer} disablePadding>
          <ListItem component="a" href="https://github.com/SimonOneNineEight">
            <ListItemIcon>
              <GitHubIcon style={{ color: "rgba(255, 255, 255)" }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>

      <a href="#project" className={classes.expandMore}>
        <ArrowDropDownCircleRoundedIcon fontSize="large" />
      </a>
    </div>
  );
}
