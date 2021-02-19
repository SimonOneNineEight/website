import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Link, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white,
    minHeight: "90vh",
    paddingTop: 60,
  },
  title: {
    padding: "6px 0 30px",
    textAlign: "center",
  },
  carouselWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  carouselItem: {
    minHeight: 500,
    height: "auto",
    objectFit: "contain",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },
  itemDetail: {
    textAlign: "center",
    position: "absolute",
    bottom: "5%",
    right: "50%",
    transform: "translate(50%, 0)",
    backgroundColor: theme.palette.primary.transparent,
    color: theme.palette.white,
    borderRadius: 10,
    width: "65%",
    padding: "12px 0",
  },
  itemLinkList: {
    paddingTop: 5,
    margin: "0 auto",
    width: "80%",
    justifyContent: "spaceBetween",
  },
  itemLink: {
    color: theme.palette.white,
    "&:not(:first-child)": { marginLeft: 12 },
  },
}));
export default function Project() {
  const classes = useStyles();
  const projectList = [
    {
      title: "壹玖捌's Blog",
      imgUrl: "https://i.imgur.com/xQwxiOr.png?3",
      content:
        "我存放部落格文章的地方，前端利用 React/redux 搭配 styled-components，後端則是利用 firebase",
      projectUrl: "https://simon198-blog.web.app/",
      gitHubUrl: "https://github.com/SimonOneNineEight/blog/tree/master",
    },
    {
      title: "Netflix - Clone",
      imgUrl: "https://i.imgur.com/Houjjzi.jpg?2",
      content:
        "用 React 做的複製版 Netflix，可以看到除了 Netflix original 以外的預告片",
      projectUrl: "https://netflix-clone-2f811.web.app/",
      gitHubUrl: "https://github.com/SimonOneNineEight/Netflix-clone",
    },
    {
      title: "個人網站",
      imgUrl: "https://i.imgur.com/DuYBGdX.png?1",
      content: "用 React / Next.js 搭配 Material UI 做的個人網站",
      projectUrl: "https://simon198-website.web.app/",
      gitHubUrl: "https://github.com/SimonOneNineEight/website",
    },
    {
      title: "Teach Table（進行中）",
      imgUrl: "https://i.imgur.com/111Pw2U.png?3",
      content:
        "正在進行中的課程 final Project，是一個教學平台，前端利用 react/redux 搭配 styled-component，後端則是用 Express.js 搭配 Sequelize",
      gitHubUrl: "https://github.com/YSKuo/learning-platform-frontend",
    },
  ];
  return (
    <div className={classes.root}>
      <Container xl>
        <Typography className={classes.title} variant="h3" color="inherit">
          我的作品
        </Typography>
        <Carousel
          className={classes.carouselWrapper}
          animation="slide"
          interval={8000}
          navButtonsAlwaysVisible
        >
          {projectList.map((project, index) => (
            <Paper
              key={index}
              elevation={10}
              style={{ backgroundImage: `url(${project.imgUrl})` }}
              className={classes.carouselItem}
            >
              <div className={classes.itemDetail}>
                <Typography variant="h4">{project.title}</Typography>
                <Typography variant="body1">{project.content}</Typography>
                <div className={classes.itemLinkList}>
                  <Typography variant="h6">
                    {project.projectUrl && (
                      <Link
                        href={project.projectUrl}
                        className={classes.itemLink}
                      >
                        作品連結
                      </Link>
                    )}
                    {project.gitHubUrl && (
                      <Link
                        href={project.gitHubUrl}
                        className={classes.itemLink}
                      >
                        GitHub 連結
                      </Link>
                    )}
                  </Typography>
                </div>
              </div>
            </Paper>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
