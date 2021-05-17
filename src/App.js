import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'
import Header from './components/Header'
import FullHeightFlexContainer from './components/FullHeightFlexContainer'
import ExpandableTextContainer from './components/ExpandableContainer';

const App = () => {
  const setActiveSection = (e) => {
    const selection = e.currentTarget.value;
    
    setActive(selection);
  }

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200)
  }, [])

  return (
    <main>
      <Header setActiveSection={setActiveSection} />
      <FullHeightFlexContainer sectionIndex={1} id="intro">
        <IntroParagraph isLoaded={isLoaded}>I'm a full stack developer, front-end leaning, who takes pride in <Soap>🧼</Soap>clean<Soap>🧼</Soap>, performant code and <Bolt>⚡️</Bolt>lightning-fast<Bolt>⚡️</Bolt>, beautifully designed UX.</IntroParagraph>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={2} id="about-me">
        <MaxWidthContainer>
          <h2>a little more about me</h2>
          <ExpandableTextContainer 
            moreText="go on..." 
            lessText="whoa nevermind, tl;dr" 
            ariaLabel="Show more of the 'about me' text"
            initialHeight={300}
          >
            <p>After graduating from Ohio University with a bachelors degree in Visual Communication, I’ve spent my 10 year career in Austin, Texas working for a handful of tech companies. Through the time I’ve spent at each company, I’ve encountered a variety of technologies, methodologies and colleagues who have helped educate and shape me into the developer I am today.</p>
            <p>My main interest is in the front end, the visual part of any app, as I gravitate more towards what I can see and interact with in my day to day life. Seeing an app or website come to life as I code motivates me and I feed off of the enjoyment the products I develop bring to end users. I strongly believe in clean, tightly written, documented and tested code. I also believe in the ecosystem in which a product is developed; the project and product managers, designers and QA engineers as well as the developers are integral in the success of any product.</p>
            <p>I also enjoy modernizing code bases and refactoring for performance improvements. It is immensely satisfying to untangle old code and put it back together in a consistent, readable way with a lower learning curve for developers, in a more efficient development environment. At every job I've worked at, I've encountered long ignored code bases, still actively developed in, that slow developers to a crawl and invite slow code and sometimes security issues to run rampant. Its why I consistently stress to colleagues that an up to date codebase is an efficient codebase and often times a more performant codebase.</p>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={3} id="current-job">
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
                <h3>Senior Front End Engineer</h3>
                <Date>August 2019 - Present</Date>
              </div>
            </LogoTitle>
            <p>Lead Engineer for content on leaflymarket.com and leafly.com. Includes news, learn and glossary hubs using Wordpress as well marketing content site wide using Directus. Accomplishments include revitalizing and refactoring long neglected Wordpress codebase, implementing React.js blocks within Gutenberg editor, defining architecture for Directus integration, working with writers and designers to create new content hubs and features. Currently leading the effort to transition Wordpress to headless mode.</p>
            <p>Frontend guild leader responsible for running monthly meetings and as advocate between design and engineering teams. Lead multiple efforts to help design align with engineering in process, style guide and component library.</p>
            <p>Doubled lighthouse and core web vitals scores on home, strain and news pages (~60% of total site traffic) by creating a custom image component with imgix, reducing bundle sizes by nearly 50% and refactoring pages to optimize load times.</p>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={4} id="previous-job-experience">
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
                    <h3>Senior Front End Engineer</h3>
                    <Date>January 2019 - July 2019</Date>
                  </div>
                </LogoTitle>
                <p>I implemented a CMS using Strapi for our home page content, our blog and marketing content throughout the site.</p>
                <p>I converted code base from SCSS to Styled Component and implemented image optimization site wide with the help of Imgix.</p>
                <p>Gained a firm grasp on code testing with Jest, Enzyme, Selenium and Nightwatch.</p>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/tastemade.png'} alt="Tastemade" />
                  <div>
                    <h3>Front End Engineer</h3>
                    <Date>June 2016 - December 2018</Date>
                  </div>
                </LogoTitle>
                <p>Feature development and maintenance for <a href="https://www.tastemade.com/">Tastemade.com</a> with a small team of developers and a designer. Primarily working with a React, Webpack, Node stack.</p>
                <p>Creation and front end development for <a href="https://shop.tastemade.com/">shop.tastemade.com</a> in Shopify using Liquid and Javascript.</p>
                <p>Featured development and maintenance for Tastemade's Roku and Apple TV 3 applications using Brightscript, Javascript, XML and AWS Lambdas.</p>
              </ListItem>
              <ListItem>
              <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/gpo.svg'} alt="GPO, Inc." />
                  <div>
                    <h3>Front End Engineer</h3>
                    <Date>September 2015 - June 2016</Date>
                  </div>
                </LogoTitle>
                <p>
                  Worked on a small team of developers, copywriters, designers and SEO specialists to produce ultra-performant SEO location pages for companies like Domino's, Maggianos, Check N' Go and Bridgestone. Each microsite used a Node, Handlebars and PostCSS stack.
                </p>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/mm.png'} alt="Mutual Mobile" />
                  <div>
                    <h3>Front End Engineer</h3>
                    <Date>Jul 2012 – Aug 2015</Date>
                  </div>
                </LogoTitle>
                <p>
                  Developed feature-rich web applications and responsive websites for some of Americas top companies. I transitioned to the marketing department to serve as the marketing engineer where my daily tasks included administering and maintaining Marketo and Salesforce and creating prototypes or new tools such as an app review aggregator that added value for clients and/or drove new business.
                </p>
              </ListItem>
            </List>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={5} displayScrollButton={false} displayBackToTop={true} id="skills">
        <MaxWidthContainer>
          <h2>What I know</h2>
          <Table>
            <Row>
              <Column>
                <h3>Languages</h3>
                <p>HTML, CSS, Javascript, Typscript, PHP</p>
              </Column>
              <Column>
                <h3>Frameworks</h3>
                <p>React, Next.js, Redux, Tailwind, Styled Components, Node.js, Jest, Wordpress</p>
              </Column>
              <Column>
                <h3>Tools</h3>
                <p>Git, Storybook, Yarn, Jest Axe, Pa11y, Nightwatch, Google Analytics, Split.io, Looker, Amplitude, Google Tag Manager, Datadog, Rollbar, Calibre</p>
              </Column>
              <Column>
                <h3>Concepts</h3>
                <p>Responsive web development, Agile, REST, Web Content Accessibility Guidelines (WCAG), Core Web Vitals</p>
              </Column>
            </Row>
          </Table>
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
const Date = styled.span`
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
