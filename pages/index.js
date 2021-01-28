import Head from "next/head";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { Container, makeStyles } from "@material-ui/core";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Simon Huang</title>
      </Head>
      <Container>
        <Navbar />
        <main>
          <div id="aboutMe">
            <Banner />
          </div>
          <div id="project">
            <Project id="project" />
          </div>
          <div id="experience">
            <Experience id="experience" />
          </div>
          <div id="blog">
            <Blog />
          </div>
          <div id="contactMe">
            <Contact />
          </div>
        </main>
      </Container>
    </div>
  );
}
