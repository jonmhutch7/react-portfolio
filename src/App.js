import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'
import Header from './components/Header'
import FullHeightFlexContainer from './components/FullHeightFlexContainer'
import ExpandableTextContainer from './components/ExpandableContainer';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200)
  }, []);

  const year = new Date().getFullYear() - 2012;

  return (
    <main>
      <Header />
      <FullHeightFlexContainer sectionIndex={1} id="intro">
        <IntroParagraph isLoaded={isLoaded}>I'm an experienced Frontend Developer who takes pride in <Soap>🧼</Soap>clean<Soap>🧼</Soap>, performant code and <Bolt>⚡️</Bolt>lightning-fast<Bolt>⚡️</Bolt> UI.</IntroParagraph>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={2} id="about-me">
        <MaxWidthContainer>
          <h2>a little more about me</h2>
          <ExpandableTextContainer
            moreText="go on..."
            lessText="whoa nevermind, tl;dr"
            ariaLabel="Show more of the 'about me' text"
            initialHeight={350}
          >
            <p>After graduating from Ohio University with a bachelors degree in Visual Communication, I’ve spent my {year} year career in Austin, Texas working for a handful of tech companies. Throughout the time I’ve spent at each company, I’ve encountered a variety of technologies, methodologies and colleagues who have helped educate and shape me into the developer I am today.</p>
            <p>My main interest is in the frontend, the visual part of any app, as I gravitate more towards what I can see and interact with in my day to day life. Seeing an app or website come to life as I code motivates me and I feed off of the enjoyment the products I develop bring to end users. I strongly believe in clean, tightly written, documented and tested code. I also believe in the ecosystem in which a product is developed; the project and product managers, designers and QA engineers as well as the developers are integral in the success of any product.</p>
            <p>I also enjoy modernizing code bases and optimizing for performance improvements. It is immensely satisfying to untangle old code and put it back together in a consistent, readable way with a lower learning curve for developers, in a more efficient development environment. At every job I've worked at, I've encountered long ignored code bases, still actively developed in, that slow developers to a crawl and invite poorly performing code and sometimes security issues to run rampant. Its why I consistently stress to colleagues that an up to date codebase is an efficient and more performant codebase.</p>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={3} id="skills">
        <MaxWidthContainer>
          <h2>What I know</h2>
          <Table>
            <Row>
              <Column>
                <h3>Languages</h3>
                <p>Typscript, Javascript, HTML, CSS</p>
              </Column>
              <Column>
                <h3>Frameworks</h3>
                <p>React.js, Next.js, Redux, Tailwind CSS, Styled Components, Node.js, Jest, Wordpress, GraphQL</p>
              </Column>
              <Column>
                <h3>Tools</h3>
                <p>Git, Storybook, Yarn, NPM, Jest Axe, Pa11y, Google Analytics, Split.io, Google Tag Manager, Datadog, Rollbar, Calibre</p>
              </Column>
              <Column>
                <h3>Concepts</h3>
                <p>Responsive web development, Agile, REST, Web Content Accessibility Guidelines (WCAG), Core Web Vitals</p>
              </Column>
            </Row>
          </Table>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={4} id="current-job">
        <MaxWidthContainer>
          <h2>what I'm currently up to</h2>
          <ExpandableTextContainer
            moreText="tell me more"
            lessText="impressive!"
            ariaLabel="Show more of the 'current job' text"
          >
            <LogoTitle>
              <CompanyLogo src={process.env.PUBLIC_URL + '/logos/leafly.png'} alt="Leafly" />
              <div>
                <h3>Senior Frontend Engineer</h3>
                <DateSpan>August 2019 - Present</DateSpan>
              </div>
            </LogoTitle>
            <p>My primary focus at Leafly has been optimization of consumer facing products, whether that be performance optimization, code optimization, or optimization of features to provide users with the best possible experience for discovering and legally purchasing cannabis.</p>
            <p>As a subject matter expert for web performance, I helped the engineering org define and maintain performance metrics. On multiple occasions I was tasked with improving the Core Web Vitals (CWV) metrics in multiple areas of the site. I doubled lighthouse and CWV scores on the home, strain and news pages (~60% of total site traffic) by creating a custom image component built to harness the powers of Imgix, reducing bundle sizes by nearly 50% by reverse engineering areas of our code base and refactoring pages to optimize load times with Next.js dynamic components.</p>
            <p>I oversaw the migration of three separate projects where we converted javascript to typescript, removed legacy code and optimized the migrated pages for the most recent React.js and Next.js builds. One migration was a complete rebuild of a Wordpress-hosted part of the site, which involved converting our Wordpress install to headless mode, rewriting all PHP templates in typescript and optimizing the Wordpress REST API wider use.</p>
            <p>I’ve also led the implementation of several consumer-facing features. They include setting up and using Directus CMS to enable marketing and SEO to quickly update sections of the site, a completely customizable home page using Directs CMS, a comparison shopping component that allows users to quickly see the closest and cheapest ways to purchase cannabis, a strain quiz component that helps users find the strain of cannabis that most fits their needs, and several React components for the Gutenberg editor in Wordpress allowing our content team to customize their articles.</p>
            <p>I serve as the frontend guild leader responsible for running monthly guild meetings and syncing the design team with engineering teams.</p>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={5} displayScrollButton={false} displayBackToTop={true} id="previous-job-experience">
        <MaxWidthContainer>
          <h2>before Leafly, I worked at</h2>
          <ExpandableTextContainer
            moreText="there's more?!"
            lessText="great experience!"
            ariaLabel="toggle visibility of 'previous jobs' text"
          >
            <List>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/spreetail.png'} alt="Spreetail" />
                  <div>
                    <h3>Senior Frontend Engineer</h3>
                    <DateSpan>January 2019 - July 2019</DateSpan>
                  </div>
                </LogoTitle>
                <p>Served as engineering lead for marketing and content site wide using Strapi as a CMS and integrating it into our React, Next.js and Typescript project. I also converted our existing SCSS styles to styled components and created a robust image sizing solution with Imgix.</p>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/tastemade.png'} alt="Tastemade" />
                  <div>
                    <h3>Frontend Engineer</h3>
                    <DateSpan>June 2016 - December 2018</DateSpan>
                  </div>
                </LogoTitle>
                <p>Working directly with content creators and designers, I helped create a unique, interactive experience on Tastemade’s flagship web site. I implemented several user-centric optimizations including saving recipes and subscribing to the company’s premium offering.</p>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/gpo.svg'} alt="GPO, Inc." />
                  <div>
                    <h3>Frontend Engineer</h3>
                    <DateSpan>September 2015 - June 2016</DateSpan>
                  </div>
                </LogoTitle>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/mm.png'} alt="Mutual Mobile" />
                  <div>
                    <h3>Frontend Engineer</h3>
                    <DateSpan>Jul 2012 – Aug 2015</DateSpan>
                  </div>
                </LogoTitle>
              </ListItem>
            </List>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
    </main>
  );
}

const MaxWidthContainer = styled.div`
  max-width: 768px;
  padding: 60px 20px;
  margin: 0 auto;
`
const IntroParagraph = styled.p`
  margin: 0 auto;
  max-width: 810px;
  font-family: 'Gothic A1', sans-serif;
  font-size: 26px;
  font-weight: bold;
  padding: 0 20px;
  opacity: ${props => props.isLoaded ? 1 : 0};
  transform: scale(${props => props.isLoaded ? 1 : 1.2});
  transition: all 0.3s ease;
  @media (prefers-reduced-motion) {
    transition: none;
    opacity: 1;
    transform: 1;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const FlickerAnimation = keyframes`
  0%, 8%, 12% {
    opacity: 0.1;
  }
  2%, 9%, 20%, 30% {
    opacity: 1;
  }
  25%, 72% {
    opacity: 0.2;
  }
  70% {
    opacity: 0.7;
  }
  77%, 100% {
    opacity: 0.9;
  }
`;
const Bolt = styled.span`
  animation: ${FlickerAnimation} 3s linear infinite;
`

const ShakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-1px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(1px, 0, 0);
  }
`
const Soap = styled.span`
  display: inline-block;
  animation: ${ShakeAnimation} 3s linear infinite;
  transform: translate3d(0, 0, 0);
  padding: 0 4px;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  margin-bottom: 40px;
`
const DateSpan = styled.span`
  font-size: 14px;
  color: #555;
  line-height: 1;
  margin-top: 6px;
  display: block;
`
const CompanyLogo = styled.img`
  max-height: 50px;
  margin-bottom: 12px;
  max-width: 100px;
  @media (min-width: 768px) {
    max-width: 150px;
  }
`
const LogoTitle = styled.div`
  margin-bottom: 8px;
  > div {
    line-height: 1;
  }
`
const Table = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`
const Row = styled.div`
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`
const Column = styled.div`
  > h3 {
    margin-bottom: 8px;
  }
  > p {
    margin-bottom: 0;
  }
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
    &:nth-of-type(1n) {
      padding-right: 8px;
    }
    &:nth-of-type(2n) {
      padding-left: 8px;
    }
    &:nth-child(n+3) {
      margin-bottom: 0;
    }
  }
`

export default App;
