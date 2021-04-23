import React, { Component } from 'react';
import styled from 'styled-components'

class Header extends Component {
  render() {
    return (
			<div>
				<FlexContainer>
					<Title>Jon Hutchison</Title>
					<IconsContainer>
						<Icon aria-label="Jons resume" target="_blank" href={process.env.PUBLIC_URL + '/resume.pdf'}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 75 75" width="25" height="25"><path d="M36.2,30.79a3.55,3.55,0,1,1,3.55,3.55A3.55,3.55,0,0,1,36.2,30.79ZM32.11,43.57c0.21,0.1.41,0.22,0.62,0.31a15,15,0,0,0,4.32,1,26.5,26.5,0,0,0,4.13.1,19.24,19.24,0,0,0,3.64-.5,10.65,10.65,0,0,0,2.49-.9c0.21-.11.23-0.14,0.22-0.43,0-.62-0.05-2.18-0.1-2.8a8.83,8.83,0,0,0-.36-1.95,1.57,1.57,0,0,0-1-1.16c-0.72-.22-1.44-0.47-2.15-0.7L42,36c-0.18-.06-0.18,0-0.23.17-0.3,1.49-.67,3-1.08,4.4l-0.1.32,0-.09c-0.09-.89-0.18-1.78-0.28-2.67a1.24,1.24,0,0,1,.09-0.68,2.9,2.9,0,0,0,.13-0.34,0.51,0.51,0,0,0-.21-0.6c-0.37,0-.74,0-1.11,0a0.17,0.17,0,0,0-.11.07,0.64,0.64,0,0,0-.08.6c0.05,0.14.1,0.28,0.16,0.42a0.83,0.83,0,0,1,0,.44c-0.07.64-.13,1.29-0.2,1.93l-0.09.88h0c-0.47-1.59-.88-3.21-1.2-4.87a1.89,1.89,0,0,0-.25,0l-4.05,1.3a1.34,1.34,0,0,0-.85.88,8.5,8.5,0,0,0-.34,1.32A34.68,34.68,0,0,0,32,43.3,0.26,0.26,0,0,0,32.11,43.57Zm46-24.17V80.61a3.18,3.18,0,0,1-3.17,3.17H25.05a3.18,3.18,0,0,1-3.17-3.17V19.39a3.18,3.18,0,0,1,3.17-3.17H74.95A3.18,3.18,0,0,1,78.12,19.39Zm-4,.83H25.88V79.78H74.12V20.22Zm-19.29,12H66.15a2,2,0,0,0,0-4H54.83A2,2,0,1,0,54.83,32.22Zm0,7.66H66.15a2,2,0,0,0,0-4H54.83A2,2,0,0,0,54.83,39.88ZM32.91,54.18H67.09a2,2,0,0,0,0-4H32.91A2,2,0,1,0,32.91,54.18Zm0,8.73H67.09a2,2,0,0,0,0-4H32.91A2,2,0,1,0,32.91,62.92Zm0,8.73H67.09a2,2,0,0,0,0-4H32.91A2,2,0,1,0,32.91,71.65Z"></path></svg>
						</Icon>
						<Icon aria-label="Jons Linkedin profile" target="_blank" href="https://www.linkedin.com/in/jonmhutchison">
							<svg width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
							</svg>
						</Icon>
						<Icon aria-label="Jons twitter profile" target="_blank" href="https://twitter.com/jonmhutch">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" height="25" width="25">
								<path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
      					c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
      					c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
      					c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
      					c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
      					c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
      					c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
							</svg>
						</Icon>
						<Icon aria-label="Jons github profile" target="_blank" href="https://github.com/jonmhutch7">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 430.117 430.117">
								<path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
      					c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
      					v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
      					C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
      					c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
      					 M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
							</svg>
						</Icon>
					</IconsContainer>
				</FlexContainer>
				<SelectContainer>
					<Select aria-label="site navigation" name="navigation" onChange={this.props.setActiveSection}>
						<option value="1">Experience</option>
						<option value="2">About Me</option>
						<option value="3">Skills</option>
						<option value="4">Interests</option>
					</Select>
				</SelectContainer>

			</div>
    )
  }
}

const FlexContainer = styled.div`
  padding: 0 20px;
  margin: 30px 0 22px;
	@media screen and (min-width: 620px) {
    display: flex;
		justify-content: space-between;
		align-items: center;
  }
`
const Title = styled.h1`
	font-size: 20px;
  color: #71210c;
	text-shadow: 2px 0 0 rgba(252, 74, 26, 0.5), 4px 0 0 rgba(247, 183, 51, 0.5);
  line-height: 1;
	margin-bottom: 5px;
	text-align: center;
  @media screen and (min-width: 620px) {
    margin-bottom: 0;
    text-align: left;
  }
`
const IconsContainer = styled.div`
  @media screen and (max-width: 620px) {
    float: none;
    margin: 0 auto;
    text-align: center;
  }
  > a:first-child {
    margin-left: 0;
  }
`
const Icon = styled.a`
	margin-left: 20px;
	padding: 10px 10px 3px;
	display: inline-block;
  &:hover svg {
    fill: #fc4a1a;
  }
	> svg {
		fill: #ccc;
    transition: fill 0.2s ease;
	}
`
const SelectContainer = styled.div`
	padding: 0 30px;
	max-width: 600px;
	margin: 0 auto 15px;
	@media screen and (min-width: 768px) {
		display: none;
	}
`
const Select = styled.select`
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: .45em;
	margin-bottom: 10px;
	color: #71210c;
	font-family: 'Gothic A1', sans-serif;
	margin: 0;
	font-weight: bold;
	appearance: none;
	border: none;
	width: 100%;
	padding-left: 26px;
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cG9seWdvbiBwb2ludHM9IjM5Ni42LDE2MCA0MTYsMTgwLjcgMjU2LDM1MiA5NiwxODAuNyAxMTUuMywxNjAgMjU2LDMxMC41ICIvPjwvc3ZnPg==) no-repeat left #fff;
	background-size: 20px;
`

export default Header