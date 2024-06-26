import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const Header = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 200)
	}, [])

	return (
		<FixedContainer>
			<FlexContainer>
				<Title isLoaded={isLoaded}>Jon Hutchison</Title>
				<IconsContainer>
					<Icon aria-label="Jons resume" target="_blank" href={process.env.PUBLIC_URL + '/resume.pdf'}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 75 75" width="25" height="25"><path d="M36.2,30.79a3.55,3.55,0,1,1,3.55,3.55A3.55,3.55,0,0,1,36.2,30.79ZM32.11,43.57c0.21,0.1.41,0.22,0.62,0.31a15,15,0,0,0,4.32,1,26.5,26.5,0,0,0,4.13.1,19.24,19.24,0,0,0,3.64-.5,10.65,10.65,0,0,0,2.49-.9c0.21-.11.23-0.14,0.22-0.43,0-.62-0.05-2.18-0.1-2.8a8.83,8.83,0,0,0-.36-1.95,1.57,1.57,0,0,0-1-1.16c-0.72-.22-1.44-0.47-2.15-0.7L42,36c-0.18-.06-0.18,0-0.23.17-0.3,1.49-.67,3-1.08,4.4l-0.1.32,0-.09c-0.09-.89-0.18-1.78-0.28-2.67a1.24,1.24,0,0,1,.09-0.68,2.9,2.9,0,0,0,.13-0.34,0.51,0.51,0,0,0-.21-0.6c-0.37,0-.74,0-1.11,0a0.17,0.17,0,0,0-.11.07,0.64,0.64,0,0,0-.08.6c0.05,0.14.1,0.28,0.16,0.42a0.83,0.83,0,0,1,0,.44c-0.07.64-.13,1.29-0.2,1.93l-0.09.88h0c-0.47-1.59-.88-3.21-1.2-4.87a1.89,1.89,0,0,0-.25,0l-4.05,1.3a1.34,1.34,0,0,0-.85.88,8.5,8.5,0,0,0-.34,1.32A34.68,34.68,0,0,0,32,43.3,0.26,0.26,0,0,0,32.11,43.57Zm46-24.17V80.61a3.18,3.18,0,0,1-3.17,3.17H25.05a3.18,3.18,0,0,1-3.17-3.17V19.39a3.18,3.18,0,0,1,3.17-3.17H74.95A3.18,3.18,0,0,1,78.12,19.39Zm-4,.83H25.88V79.78H74.12V20.22Zm-19.29,12H66.15a2,2,0,0,0,0-4H54.83A2,2,0,1,0,54.83,32.22Zm0,7.66H66.15a2,2,0,0,0,0-4H54.83A2,2,0,0,0,54.83,39.88ZM32.91,54.18H67.09a2,2,0,0,0,0-4H32.91A2,2,0,1,0,32.91,54.18Zm0,8.73H67.09a2,2,0,0,0,0-4H32.91A2,2,0,1,0,32.91,62.92Zm0,8.73H67.09a2,2,0,0,0,0-4H32.91A2,2,0,1,0,32.91,71.65Z"></path></svg>
					</Icon>
					<Icon aria-label="Jons email" target="_blank" href="mailto:jon@jonhutchison.com">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="28" height="22">
							<path d="M29,4H3A3,3,0,0,0,0,7V25a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V7A3,3,0,0,0,29,4Zm-.72,2L16,14.77,3.72,6ZM30,25a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V7.23l13.42,9.58a1,1,0,0,0,1.16,0L30,7.23Z" />
						</svg>
					</Icon>
					<Icon aria-label="Jons Linkedin profile" target="_blank" href="https://www.linkedin.com/in/jonmhutchison">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 430.117 430.117">
							<path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
							c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
							v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
							C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
							c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
								M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
						</svg>
					</Icon>
					<Icon aria-label="Jons github profile" target="_blank" href="https://github.com/jonmhutch7">
						<svg width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
						</svg>
					</Icon>
				</IconsContainer>
			</FlexContainer>
		</FixedContainer>
	)
}

const FixedContainer = styled.div`
	position: fixed;
	background-color: white;
	width: 100%;
	z-index: 10;
	padding: 16px 16px 8px 16px;
	box-shadow: 0 1px 10px rgba(0,0,0,0.1);
	@media screen and (min-width: 620px) {
		padding: 8px 16px;
	}
`
const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
	@media screen and (min-width: 620px) {
		flex-direction: row;
		justify-content: space-between;
  }
`
const Title = styled.h1`
	font-size: 20px;
  color: #71210c;
  line-height: 1;
	transition: text-shadow 0.3s ease-in-out;
	text-shadow: ${props => props.isLoaded ? '2px 0 0 rgba(252, 74, 26, 0.5), 4px 0 0 rgba(247, 183, 51, 0.5)' : 'initial'};
  @media screen and (min-width: 620px) {
    margin-bottom: 0;
  }
`
const IconsContainer = styled.div`
	display: flex;
	align-items: baseline;
	gap: 15px;
  @media screen and (max-width: 620px) {
    margin: 0 auto;
    text-align: center;
  }
  
`
const Icon = styled.a`
	line-height: 0;
	padding: 8px;
  &:hover svg {
    fill: #fc4a1a;
  }
	svg {
		fill: #ccc;
    transition: fill 0.2s ease;
	}
`

export default Header