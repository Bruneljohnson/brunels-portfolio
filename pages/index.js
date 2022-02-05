import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import { Fragment } from "react";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Brunel Johnson | MERN Developer</title>
      </Head>

      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Fragment>
  );
};

export default Home;
