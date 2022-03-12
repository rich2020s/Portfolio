import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import { LiveCodeBtn, SourceCodeBtn } from "../components/Button";
import {
  MeSection,
  Name,
  DescContainer,
  Description,
  IntroContainer,
  SeeMoreBtn,
} from "../components/home";
import { GlobalStyle } from "../constant/GlobalStyle.js";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import {
  ProjWrapper,
  Title,
  ProjContainer,
  ProjName,
  ProjDesc,
  ProjContent,
  ImageWrapper,
} from "../components/project";
import Image from "next/image";
import { AboutSection, AboutMe } from "../components/about";
import {
  ContactForm,
  WebsitesLink,
  LinksContainer,
  ContactWrapper,
} from "../components/contact";

export default function Home() {
  const projRef = useRef(null);
  const ScrollToProj = () => projRef.current.scrollIntoView();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) return "";
  return (
    <>
      <Head>
        <title>Rich Chan portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Ubuntu:ital@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <MeSection>
        <IntroContainer>
          <DescContainer>
            <Fade
              triggerOnce={true}
              direction="left"
              delay={300}
              cascade={true}
              damping={0.5}
            >
              <Name>Rich Chan</Name>
              <Description>
                Hello there! I am Rich.
                <br />I am a self-drive web developer.
              </Description>
              <SeeMoreBtn onClick={ScrollToProj}>see more</SeeMoreBtn>
            </Fade>
          </DescContainer>
        </IntroContainer>
      </MeSection>
      <ProjWrapper ref={projRef}>
        <Title>Projects</Title>
        <ProjContainer>
          <Fade triggerOnce={true} direction="left" delay={300}>
            <ProjName as="h3">2048</ProjName>
          </Fade>
          <ProjContent>
            <ProjDesc>
              <Fade triggerOnce={true} direction="left" delay={600}>
                <p>
                  2048 is a game where you combine numbered tiles in order to
                  gain a higher numbered tile. <br />
                  You can move the tiles by using arrow keys.
                </p>
                <div>
                  <LiveCodeBtn
                    as="a"
                    target="_blank"
                    href="https://zealous-perlman-f4781c.netlify.app/"
                  >
                    Live code
                  </LiveCodeBtn>
                  <SourceCodeBtn
                    as="a"
                    target="_blank"
                    href="https://github.com/rich2020s/2048"
                  >
                    Source Code
                  </SourceCodeBtn>
                </div>
              </Fade>
            </ProjDesc>
            <Fade triggerOnce={true} direction="right" delay={900}>
              <ImageWrapper>
                <Image
                  src="/images/2048.png"
                  height="200"
                  width="200"
                  alt="game 2048"
                />
              </ImageWrapper>
            </Fade>
          </ProjContent>
        </ProjContainer>
        <ProjContainer>
          <Fade triggerOnce={true} direction="left" delay={1200}>
            <ProjName as="h3">Food map</ProjName>
          </Fade>
          <ProjContent>
            <ProjDesc>
              <Fade triggerOnce={true} direction="left" delay={1200}>
                <p>
                  The website allows users to blog about their favorite
                  restaurants and foods. Whenever users search for restaurants,
                  it will display posts left by other users. <br />
                  Users can also find the nearby restaurants and their
                  posts.(Mandarin)
                </p>
                <div>
                  <LiveCodeBtn
                    as="a"
                    target="_blank"
                    href="https://api.outshaker.tw/#/home"
                  >
                    Live code
                  </LiveCodeBtn>
                  <SourceCodeBtn
                    as="a"
                    target="_blank"
                    href="https://github.com/chachachater/foodmap"
                  >
                    Source Code
                  </SourceCodeBtn>
                </div>
              </Fade>
            </ProjDesc>
            <Fade triggerOnce={true} direction="right" delay={1500}>
              <ImageWrapper>
                <Image
                  src="/images/foodmap.png"
                  height="200"
                  width="200"
                  alt="food map"
                />
              </ImageWrapper>
            </Fade>
          </ProjContent>
        </ProjContainer>
      </ProjWrapper>
      <AboutSection>
        <AboutMe>About Me</AboutMe>
        <div
          style={{
            width: "70%",
            maxWidth: "768px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Fade triggerOnce={true} direction={"up"} delay={900}>
            <Description>
              Hi! My name is Rich. I'm from Taiwan and I am authorized to work
              in the US. I went to the bootcamp, Lidemy Mentor Program, last
              year. I have learned jQuery, HTML, CSS and JavaScript. I also
              learned how to use React to build a website.
              <br />
              <br />
              After the bootcamp, I keep learning myself. Using new tools to
              build website like Next.js.
              <br />
              <br />
              My Skill: React, Next.js, Express, Sequelize, MySQL.
            </Description>
          </Fade>
        </div>
      </AboutSection>
      <ProjWrapper>
        <Title>Contact Me</Title>
        <Description>Please feel free to contact me at any time.</Description>
        <LinksContainer>
          <WebsitesLink href="https://github.com/rich2020s" target="_blank">
            <Image
              src="/images/github-brands.svg"
              height="48"
              width="48"
              alt="GitHub"
            />
          </WebsitesLink>
          <br />
          <WebsitesLink
            href="https://www.linkedin.com/in/rich-chan-3a4815229/"
            target="_blank"
          >
            <Image
              src="/images/linkedin-brands.svg"
              height="48"
              width="48"
              alt="linkedIn"
            />
          </WebsitesLink>
        </LinksContainer>
        <ContactForm />
      </ProjWrapper>
    </>
  );
}
