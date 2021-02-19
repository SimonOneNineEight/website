import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
  Link,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.white,
    padding: "60px 0 48px",
  },
  title: {
    padding: "6px 0 30px",
    textAlign: "center",
  },
  white: {
    color: theme.palette.white,
  },
  inlineWhite: {
    display: "inline",
    color: theme.palette.white,
  },
  listItem: {
    border: "2px solid white",
    borderRadius: 10,
    "&:not(:first-child)": {
      marginTop: 12,
    },
  },
}));

const blogs = [
  {
    title: "一起看看什麼是 JSX 吧！",
    content:
      " React.js 是目前世界上最多人用的前端框架之一，而在 React 當中，我們常常使用到一個語法糖（Syntatic Sugar），他讓前端工程師在開發 React 的時候可以更加方便快速！那今天就讓我們一探究竟到底什麼事 JSX 吧！",
    url: "https://simon198-blog.web.app/posts/-MRNSPZ5JSmWMuzYzwho",
  },
  {
    title: "SVG 到底是什麼？ SVG 簡單介紹～",
    content:
      "身為一個網頁前端工程學徒，不免俗的會看到幾種圖片的副檔名，最常見的大概就是 jpg, png, svg 這三種了吧！說到 jpg, png 這兩種還算熟悉，畢竟我們一班看到的圖片大部分都是這兩種結尾的，但是 svg 是什麼就讓我霧颯颯的了！那反正都要來查查看，不如就直接寫成文章吧！",
    url: "https://simon198-blog.web.app/posts/-MQuXRwQM6N0yoX6F8jJ",
  },
];

export default function Blog() {
  const classes = useStyles();

  return (
    <Container xl>
      <List className={classes.root}>
        <Typography className={classes.title} variant="h3" color="inherit">
          我的 BLOG
        </Typography>
        {blogs.map((blog, index) => (
          <ListItem alignItems="flex-start" className={classes.listItem}>
            <ListItemText
              key={index}
              primary={
                <Link href={blog.url}>
                  <Typography
                    component="span"
                    variant="h5"
                    className={classes.inlineWhite}
                    color="white"
                  >
                    {blog.title}
                  </Typography>
                </Link>
              }
              secondary={
                <Link href={blog.url}>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inlineWhite}
                    color="white"
                  >
                    {blog.content}
                  </Typography>
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
