import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "72px 0 48px",
    color: theme.palette.white,
  },
  img: {
    width: "60%",
    objectFit: "contain",
    margin: "auto",
    display: "block",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    color: theme.palette.white,
  },
}));
export default function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item lg justify="flex-end" alignItems="center">
          <img className={classes.img} src="https://i.imgur.com/aHTJJn2.jpg" />
        </Grid>
        <Grid item lg>
          <Typography variant="h3">黃晟維</Typography>
          <Typography variant="h3">Simon Huang</Typography>
          <Typography variant="h6">
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
        </Grid>
      </Grid>
    </div>
  );
}
