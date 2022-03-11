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
import { Fade } from "react-awesome-reveal";
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
import { AboutSection } from "../components/about";
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
                <br />
                This is my portfolio website.
              </Description>
              <SeeMoreBtn onClick={ScrollToProj}>see more</SeeMoreBtn>
            </Fade>
          </DescContainer>
        </IntroContainer>
      </MeSection>
      <ProjWrapper ref={projRef}>
        <Title>Projects</Title>
        <Fade triggerOnce={true} direction="left" delay={300}>
          <ProjContainer>
            <ProjName as="h3">2048</ProjName>
            <ProjContent>
              <ProjDesc>
                <p>
                  2048 is a game where you combine numbered tiles in order to
                  gain a higher numbered tile. <br />
                  You can move the tiles by using arrow keys.
                </p>
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
              </ProjDesc>
              <ImageWrapper>
                <Image
                  src="/images/2048.png"
                  height="200"
                  width="200"
                  alt="game 2048"
                />
              </ImageWrapper>
            </ProjContent>
          </ProjContainer>
          <ProjContainer>
            <ProjName as="h3">Food map</ProjName>
            <ProjContent>
              <ProjDesc>
                <p>
                  The website allows users to blog about their favorite
                  restaurants and foods. Whenever users search for restaurants,
                  it will display posts left by other users. <br />
                  Users can also find the nearby restaurants and their
                  posts.(Mandarin)
                </p>
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
              </ProjDesc>
              <ImageWrapper>
                <Image
                  src="/images/foodmap.png"
                  height="200"
                  width="200"
                  alt="food map"
                />
              </ImageWrapper>
            </ProjContent>
          </ProjContainer>
        </Fade>
      </ProjWrapper>
      <AboutSection>
        <Name>About Me</Name>
        <div style={{ width: "70%" }}>
          <Description>
            Hi! My name is Rich. I'm from Taiwan and I am authorized to work in
            the US. I went to the Lidemy Mentor Program last year. Lidemy mentor
            program is an online bootcamp. I studied 40 hours a week for six
            months to become a developer.
            <br />
            <br />
            Now I'm looking for a position like web developer. I love coding and
            enjoy learning new things about it. I'm also passionate about
            solving problems.
            <br />
            <br />
            Skill: React, Next.js, Express, Sequelize, MySQL.
          </Description>
        </div>
      </AboutSection>
      <ProjWrapper>
        <Title>Contact Me</Title>
        <Description>Feel free to contact me anytime!</Description>
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
        {/* </ContactWrapper> */}
      </ProjWrapper>
    </>
  );
}
