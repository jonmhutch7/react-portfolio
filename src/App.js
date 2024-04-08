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

  const year = new Date().getFullYear() - 2013;

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
            <p>As a seasoned Senior Frontend Developer with over {year} years of industry experience, I bring a wealth of expertise in crafting exceptional web solutions. Proficient in a diverse array of technologies, including TypeScript, HTML, and CSS, I excel in leveraging frontend frameworks such as React, Next.js, and Redux to build dynamic and responsive user interfaces. My adeptness extends to the utilization of Tailwind CSS for streamlined styling and Jest and Cypress for robust testing, ensuring the reliability and performance of every project.</p>
            <p>My specialization in web performance optimization and core web vitals underscores my commitment to delivering seamless user experiences. I take pride in my ability to produce clean, well-organized code that not only meets but exceeds industry standards. Meticulously following designs and project plans provided by designers and project managers, I am adept at collaborating within multidisciplinary teams to achieve project goals efficiently. Whether working independently or in tandem with colleagues, I consistently demonstrate adaptability, initiative, and a passion for driving excellence in frontend development.</p>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={3} id="skills">
        <MaxWidthContainer>
          <h2>Skills</h2>
          <Table>
            <Row>
              <Column>
                <h3>Languages</h3>
                <p>TypeScript, JavaScript, HTML, CSS, PHP, Ruby</p>
              </Column>
              <Column>
                <h3>Frameworks & libraries</h3>
                <p>Next.js, React, Node.js, Redux, Tailwind CSS, ESlint, Jest, Cypress, Testing Library, Google Maps, Storybook, GraphQL PostCSS, Styled Components, Ruby on Rails</p>
              </Column>
              <Column>
                <h3>Platforms</h3>
                <p>Datadog, Imgix, Split.io, Docker, Google Analytics, AWS, Google Cloud Platform</p>
              </Column>
              <Column>
                <h3>Concepts</h3>
                <p>Core Web Vitals, A/B Testing, SEO, Accessibility (WCAG), Responsive web dev</p>
              </Column>
              <Column>
                <h3>Content Management</h3>
                <p>Wordpress, Directus, Strapi</p>
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
            <List>
              <ListItem>
            <LogoTitle>
              <CompanyLogo src={process.env.PUBLIC_URL + '/logos/leafly.png'} alt="Leafly" />
              <div>
                <h3>Senior Frontend Engineer</h3>
                <DateSpan>August 2019 - Present</DateSpan>
              </div>
            </LogoTitle>
            <ul>
              <li>Championed web performance as the subject matter expert in Core Web Vitals by educating colleagues on best practices, developing processes to monitor, diagnose and fix regressions and architecting solutions to maintain performance in areas like data-fetching and image optimization</li>
              <li>Led a team to build a headless frontend solution using Next.js for a WordPress instance managing thousands of posts and pages, reducing development time and barrier of entry for WordPress development</li>
              <li>Improved A/B testing capabilities by architecting a solution leveraging Split.IO for both server-side and client-side Next.js usage, resulting in increased experiment confidence</li>
              <li>Headed the migration and refactor of four JavaScript micro-frontends, which account for 60% of site traffic, into a unified Next.js TypeScript monorepo, streamlining development processes</li>
              <li>Established bug resolution protocols that reduced turnaround time to one day through process improvements, advanced error logging techniques, and Datadog monitoring</li>
              <li>Implemented Directus CMS site-wide, empowering marketing and SEO teams to customize and iterate on content without developer intervention</li>
              <li>Contributed over 8,000 times to repositories in Github including pull requests, commits and code reviews</li>
            </ul>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/zuplo.png'} alt="Zuplo" />
                  <div>
                    <h3>Contract Engineer</h3>
                    <DateSpan>February 2023 - August 2023</DateSpan>
                  </div>
                </LogoTitle>
                <ul>
                  <li>Rewrote zuplo.com, originally built on Webflow, into a modern platform using Next.js 14, powered by TypeScript and styled with Tailwind CSS, then launched in Vercel</li>
                  <li>Built ratemyopenapi.com from the ground up using Next.js 14, TypeScript, Tailwind CSS, and Google Cloud Platform, deploying it with Vercel</li>
                </ul>
              </ListItem>
            </List>
          </ExpandableTextContainer>
        </MaxWidthContainer>
      </FullHeightFlexContainer>
      <FullHeightFlexContainer sectionIndex={5} displayScrollButton={false} displayBackToTop={true} id="previous-job-experience">
        <MaxWidthContainer>
          <h2>Past experience</h2>
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
                <ul>
                  <li>Integrated Strapi CMS into Next.js applications using GraphQL, enhancing marketing and SEO initiatives with streamlined content management capabilities</li>
                </ul>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/tastemade.png'} alt="Tastemade" />
                  <div>
                    <h3>Frontend Engineer</h3>
                    <DateSpan>June 2016 - December 2018</DateSpan>
                  </div>
                </LogoTitle>
                <ul>
                  <li>Created user experiences by developing and implementing features such as recipe saving and subscription sign-ups using Next.js, React and Styled Components</li>
                </ul>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/gpo.svg'} alt="GPO, Inc." />
                  <div>
                    <h3>Frontend Engineer</h3>
                    <DateSpan>September 2015 - June 2016</DateSpan>
                  </div>
                </LogoTitle>
                <ul>
                  <li>Refined a system to generate static, location-specific HTML landing pages for clients like Dominos Pizza and Discount Tire using a custom Node.js html generator and PostCSS</li>
                </ul>
              </ListItem>
              <ListItem>
                <LogoTitle>
                  <CompanyLogo src={process.env.PUBLIC_URL + '/logos/mm.png'} alt="Mutual Mobile" />
                  <div>
                    <h3>Frontend Engineer</h3>
                    <DateSpan>Jul 2012 – Aug 2015</DateSpan>
                  </div>
                </LogoTitle>
                <ul>
                  <li>Implemented React and Angular UI components for clients including AGCO and Wells Fargo</li>
                </ul>
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
    font-size: 38px;
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
  margin-bottom: 24px;
`
const DateSpan = styled.span`
  font-size: 14px;
  color: #555;
  line-height: 1;
  margin-top: 6px;
  display: block;
`
const CompanyLogo = styled.img`
  max-height: 40px;
  margin-bottom: 12px;
  max-width: 80px;
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
    &:nth-child(n+4) {
      margin-bottom: 0;
    }
  }
`

export default App;
