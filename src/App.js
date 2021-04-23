import React, { useState } from 'react';
import Column from './components/Column'
import styled from 'styled-components'
import Header from './components/Header'
import Item from './components/Item'

const App = () => {
  const [active, setActive] = useState("1");
  const setActiveSection = (e) => {
    const selection = e.currentTarget.value;
    
    setActive(selection);
  }

  return (
    <main>
      <Header setActiveSection={setActiveSection} />
      <ColumnContainer>
        <Column>
          <Item active={active === "1"}>
            <ItemHeader>Experience</ItemHeader>
            <div>
              <Date>August 2019 - Present</Date>
              <h3>Leafly - Senior Software Engineer</h3>
              <p>Responsible for the content portions of the website including <code>/news</code> pages, the home page and several aspects of the strain finding experience. I reduced complexity and old code in Leafly's long neglected Wordpress instance while using React to take advantage of the powerful Gutenberg editor. I also implemented a new CMS for content outside of our <code>/news</code> pages using Directus. Currently, I'm leading the project to transition to Headless Wordpress.</p>
              <p>Performance and accessibility improvements site wide have been a major focus of mine during my tenure. I implemented and standardized image usage with a custom image component built around Imgix, resulting in a vast improvement in Core Web Vitals scores. I reduced bundle sizes by as much as 48% on various parts of the site, helped move Leafly to WCAG2AA compliance by burning down accessibility errors and harnessed the power of external libraries to help reduce page load times, page load sizes and time to interactive on home and strain pages.</p>
            </div>
            <div>
              <Date>January 2019 - July 2019</Date>
              <h3>Spreetail - Senior Front End Engineer</h3>
              <p>I helped implemented a CMS using Strapi for our home page content, our blog and marketing content throughout the site.</p>
              <p>Helped convert code base from SCSS to Styled Components. Headed up image optimization site wide with the help of Imgix.</p>
              <p>Gained a firm grasp on code testing with Jest, Enzyme, Selenium and Nightwatch.</p>
            </div>
            <div>
              <Date>June 2016 - December 2018</Date>
              <h3>Tastemade - Software Developer</h3>
              <p>Feature development and maintenance for <a href="https://www.tastemade.com/">Tastemade.com</a> with a small team of developers and a designer. Primarily working with a React, Webpack, Node stack.</p>
              <p>Creation and front end development for <a href="https://shop.tastemade.com/">shop.tastemade.com</a> in Shopify using Liquid and Javascript.</p>
              <p>Featured development and maintenance for Tastemade's Roku and Apple TV 3 applications using Brightscript, Javascript, XML and AWS Lambdas.</p>
            </div>
            <div>
              <Date>September 2015 - June 2016</Date>
              <h3>
                GPO, inc. - Front End Developer
              </h3>
              <p>
                Worked on a small team of developers, copywriters, designers and SEO specialists to produce ultra-performant SEO location pages for companies like Domino's, Maggianos, Check N' Go and Bridgestone. Each microsite used a Node, Handlebars and PostCSS stack.
              </p>
            </div>
            <div>
              <Date>Jul 2012 – Aug 2015</Date>
              <h3>
                Mutual Mobile - Front End Developer
              </h3>
              <p>
                Developed feature-rich web applications and responsive websites for some of Americas top companies. I transitioned to the marketing department to serve as the marketing engineer where my daily tasks included administering and maintaining Marketo and Salesforce and creating prototypes or new tools such as an app review aggregator that added value for clients and/or drove new business.
              </p>
            </div>
          </Item>
        </Column>
        <Column>
          <Item active={active === "2"}>
            <ItemHeader>About Me</ItemHeader>
            <p>After graduating from Ohio University with a bachelors degree in Visual Communication, I’ve spent my 10 year career in Austin, Texas working for a handful of tech companies. Through the time I’ve spent at each company, I’ve encountered a variety of technologies, methodologies and colleagues who have helped educate and shape me into the developer I am today.</p>
            <p>My main interest is in the front end, the visual part of any app, as I gravitate more towards what I can see and interact with in my day to day life. Seeing an app or website come to life as I code motivates me and I feed off of the enjoyment the products I develop bring to end users. I strongly believe in clean, tightly written, documented and tested code. I also believe in the ecosystem in which a product is developed; the project and product managers, designers and QA engineers as well as the developers are integral in the success of any product.</p>
            <p>I also enjoy modernizing code bases and refactoring for performance improvements. It is immensely satisfying to untangle old code and put it back together in a consistent, readable way with a lower learning curve for developers, in a more efficient development environment. At every job I've worked at, I've encountered long ignored code bases, still actively developed in, that slow developers to a crawl and invite slow code and sometimes security issues to run rampant. Its why I consistently stress to colleagues that an up to date codebase is an efficient codebase and often times a more performant codebase.</p>
          </Item>
          <Item active={active === "3"}>
            <ItemHeader>Skills</ItemHeader>
            <h3>Web Development</h3>
            <p>React, Next.js, Redux, Tailwind, Styled Components, PostCSS, CSS-in-JS, Typescript, Express, Node.js, Jest, Jest Axe, Pa11y, Nightwatch, Wordpress, PHP</p>
            <h3>Analytics, A/B Testing, Tagging, Logging</h3>
            <p>Google Analytics, Split.io, Looker, Amplitude, Google Tag Manager, Datadog, Rollbar, Calibre</p>
          </Item>
          <Item active={active === "4"}>
            <ItemHeader>Interests</ItemHeader>
            <p>Responsive web development, Front end development, accessibility, performance</p>
          </Item>
        </Column>
      </ColumnContainer>
    </main>
  );
}

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  @media screen and (max-width: 768px) {
    display: block;
  }
  > div:last-child {
  -right: none;
  }
`
const Date = styled.span`
  font-size: 14px;
  color: #555;
`
const ItemHeader = styled.h2`
    opacity: 0;
    height: 1px;
    margin-bottom: 0;
  @media screen and (min-width: 768px) {
    opacity: 1;
    height: initial;
    margin-bottom: revert;
  }
`

export default App;
