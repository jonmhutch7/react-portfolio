import React, { Component } from 'react';
import Column from './components/Column'
import styled from 'styled-components'
import Header from './components/Header'
import Item from './components/Item'
import Instagram from './components/Instagram'


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
                <Date>June 2016 - <b>Present</b></Date>
                <h3>Tastemade</h3>
                <p>Feature development and maintenance for <a href="https://www.tastemade.com/">Tastemade.com</a> with a small team of developers and a designer. Primarily working with a React, Webpack, Node stack.</p>
                <p>Creation and front end development for <a href="https://shop.tastemade.com/">shop.tastemade.com</a> in Shopify using Liquid and Javascript.</p>
                <p>Featured development and maintenance for Tastemade's Roku and Apple TV 3 applications using Brightscript, Javascript, XML and AWS Lambdas.</p>
              </Item>
              <Item border>
                <Date>September 2015 - June 2016</Date>
                <h3>
                  GPO, inc.
                </h3>
                <p>
                  Worked on a small team of developers, copywriters, designers and SEO specialists to produce ultra-performant SEO location pages for companies like Domino's, Maggianos, Check N' Go and Bridgestone. Each microsite used a Node, Handlebars and PostCSS stack.
                </p>
              </Item>
              <Item>
                <Date>Jul 2012 – Aug 2015</Date>
                <h3>
                  Mutual Mobile
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
              <p>HTML5, CSS3, ES6 Javascript, React 16, Node, styled components, webpack, babel, superagent, react-intl, express, react-router, Gulp, Grunt, NPM</p>
              <h3>Analytics</h3>
              <p>Google Analytics, AWS/Looker, Amplitude, GTM, Dynamic Yield</p>
              <h3>Other</h3>
              <p>Handlebars, PHP, BrightScript, XML, AWS Lambda</p>
            </Item>
            <Item border>
              <h2>Interests</h2>
              <p>Responsive web development, data science and visualization, user experience design and testing, web animations, interactive media and its various web implementations</p>
            </Item>
            <Item>
              <h2>Outside of Work</h2> 
              <Instagram />
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
  > div:last-child {
    border-right: none;
  }
`
const Date = styled.span`
  font-size: 14px;
  color: #777;
`

export default App;
