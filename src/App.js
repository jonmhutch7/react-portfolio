import React, { Component } from 'react';
import Column from './components/Column'
import styled from 'styled-components'
import Header from './components/Header'
import Item from './components/Item'

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <ColumnContainer>
          <Column>
            <Item>
              <h2>Experience</h2>
              <Item border>
                <Date>August 2019 - Present</Date>
                <h3>Leafly - Senior Software Engineer</h3>
                <p>As a Senior Developer, I've been responsible for the content creation portions of the website including <code>/news</code> pages, the home page and several aspects of the strain finding experience. I helped reduce complexity and old code in Wordpress while using React to take advantage of the powerful Gutenberg editor within Wordpress. I also implemented a new CMS for content outside of our <code>/news</code> pages using Directus.</p>
                <p>I helped implement and standardize image usage with a custom image component built around Imgix. This resulted in a vast improvement in performance metrics like Lighthouse and Core Web Vitals.</p>
                <p>Other duties have revolved around iteration on the home page and building out Strain pages to better connect users to dispensaries and products.</p>
              </Item>
              <Item border>
                <Date>January 2019 - July 2019</Date>
                <h3>Spreetail - Senior Front End Engineer</h3>
                <p>I helped implemented a CMS using Strapi for our home page content, our blog and marketing content throughout the site.</p>
                <p>Helped convert code base from SCSS to Styled Components. Headed up image optimization site wide with the help of Imgix.</p>
                <p>Gained a firm grasp on code testing with Jest, Enzyme, Selenium and Nightwatch.</p>
              </Item>
              <Item border>
                <Date>June 2016 - December 2018</Date>
                <h3>Tastemade - Software Developer</h3>
                <p>Feature development and maintenance for <a href="https://www.tastemade.com/">Tastemade.com</a> with a small team of developers and a designer. Primarily working with a React, Webpack, Node stack.</p>
                <p>Creation and front end development for <a href="https://shop.tastemade.com/">shop.tastemade.com</a> in Shopify using Liquid and Javascript.</p>
                <p>Featured development and maintenance for Tastemade's Roku and Apple TV 3 applications using Brightscript, Javascript, XML and AWS Lambdas.</p>
              </Item>
              <Item border>
                <Date>September 2015 - June 2016</Date>
                <h3>
                  GPO, inc. - Front End Developer
                </h3>
                <p>
                  Worked on a small team of developers, copywriters, designers and SEO specialists to produce ultra-performant SEO location pages for companies like Domino's, Maggianos, Check N' Go and Bridgestone. Each microsite used a Node, Handlebars and PostCSS stack.
                </p>
              </Item>
              <Item>
                <Date>Jul 2012 – Aug 2015</Date>
                <h3>
                  Mutual Mobile - Front End Developer
                </h3>
                <p>
                  Developed feature-rich web applications and responsive websites for some of Americas top companies using the HTML5, CSS3, javascript and the companies proprietary MVC framework Lavaca. For a brief period, I transitioned to the marketing department to serve as the marketing engineer where my daily tasks included administering and maintaining Marketo and Salesforce and creating prototypes or new tools such as an app review aggregator that added value for clients and/or drove new business.
                </p>
              </Item>
            </Item>
          </Column>
          <Column>
            <Item border>
              <h2>Skills</h2>
              <h3>Web Development</h3>
              <p>HTML5, CSS3, ES6 Javascript, React, Redux, Node.js, Next.js, Jest, Enzyme, Selenium, Nightwatch, webpack, babel, axios</p>
              <h3>Analytics, A/B Testing, Tagging, Logging</h3>
              <p>Google Analytics, Split.io, Looker, Amplitude, GTM, Datadog, Rollbar</p>
              <h3>Other</h3>
              <p>Wordpress, PHP, AWS Lambda</p>
            </Item>
            <Item border>
              <h2>Interests</h2>
              <p>Responsive web development, Front end development, accessibility, performance</p>
            </Item>
          </Column>
        </ColumnContainer>
      </Container>
    );
  }
}

const Container = styled.div``
const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  @media screen and (max-width: 768px) {
    display: block;
  }
  > div:last-child {
    border-right: none;
  }
`
const Date = styled.span`
  font-size: 14px;
  color: #777;
`

export default App;
