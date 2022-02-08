import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import { useRef, useEffect } from "react";
import {
  Wrapper,
  Name,
  GlobalStyle,
  DescContainer,
  Description,
  WebsitesLink,
  IntroContainer,
  LinksContainer,
  SeeMoreBtn,
} from "../components/home";
import { Slide, Fade } from "react-awesome-reveal";
import {
  ProjWrapper,
  Title,
  ProjContainer,
  ProjName,
} from "../components/project";
import Image from "next/image";
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home() {
  const projRef = useRef(null);
  const ScrollToProj = () => projRef.current.scrollIntoView();
  // const useMountEffect = (ScrollToProj) => useEffect(ScrollToProj, []);
  // useMountEffect(ScrollToProj);
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
      <Wrapper>
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
                <br />A self-taught web developer.
              </Description>
              <SeeMoreBtn onClick={ScrollToProj}>see more</SeeMoreBtn>
            </Fade>
          </DescContainer>
          {/* <LinksContainer>
            {/* <WebsitesLink href="https://github.com/rich2020s" target="_blank">
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
            </WebsitesLink> */}
          {/* <button onClick={ScrollToProj}>see more</button> */}
          {/* </LinksContainer> */}
        </IntroContainer>
      </Wrapper>
      <ProjWrapper ref={projRef}>
        <Title>Projects</Title>
        <Fade
          triggerOnce={true}
          direction="left"
          delay={300}
          cascade={true}
          damping={0.5}
        >
          <ProjContainer>
            <ProjName as="h3">Proj1</ProjName>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vestibulum aliquam ultrices. Duis non lacinia est. Donec et justo
              est. Pellentesque elementum pharetra tellus, ut luctus lacus porta
              mattis. Etiam ac lobortis odio. Integer sed gravida metus, vel
              aliquam ligula. Cras tempor mollis est. Morbi ut dolor tristique,
              aliquet nisi pretium, condimentum nulla. Nullam bibendum hendrerit
              ante non euismod.
            </p>
          </ProjContainer>
          <ProjContainer>
            <ProjName as="h3">Proj1</ProjName>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vestibulum aliquam ultrices. Duis non lacinia est. Donec et justo
              est. Pellentesque elementum pharetra tellus, ut luctus lacus porta
              mattis. Etiam ac lobortis odio. Integer sed gravida metus, vel
              aliquam ligula. Cras tempor mollis est. Morbi ut dolor tristique,
              aliquet nisi pretium, condimentum nulla. Nullam bibendum hendrerit
              ante non euismod.
            </p>
          </ProjContainer>
          <ProjContainer>
            <ProjName as="h3">Proj1</ProjName>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vestibulum aliquam ultrices. Duis non lacinia est. Donec et justo
              est. Pellentesque elementum pharetra tellus, ut luctus lacus porta
              mattis. Etiam ac lobortis odio. Integer sed gravida metus, vel
              aliquam ligula. Cras tempor mollis est. Morbi ut dolor tristique,
              aliquet nisi pretium, condimentum nulla. Nullam bibendum hendrerit
              ante non euismod.
            </p>
          </ProjContainer>
          <ProjContainer>
            <ProjName as="h3">Proj1</ProjName>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vestibulum aliquam ultrices. Duis non lacinia est. Donec et justo
              est. Pellentesque elementum pharetra tellus, ut luctus lacus porta
              mattis. Etiam ac lobortis odio. Integer sed gravida metus, vel
              aliquam ligula. Cras tempor mollis est. Morbi ut dolor tristique,
              aliquet nisi pretium, condimentum nulla. Nullam bibendum hendrerit
              ante non euismod.
            </p>
          </ProjContainer>
        </Fade>
      </ProjWrapper>
    </>
  );
}
