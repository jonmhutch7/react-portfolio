import React from 'react';
import styled from 'styled-components'
import { scroller, animateScroll as scroll } from 'react-scroll'


const FullHeightFlexContainer = ({ children, sectionIndex, displayScrollButton = true, displayBackToTop = false, id }) => {
    function scrollToSection() {
        scroller.scrollTo(`section-${sectionIndex + 1}`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
    }

    return (
        <Container name={`section-${sectionIndex}`} id={id}>
            {children}
            {displayScrollButton &&
                <ScrollButton
                    onClick={scrollToSection}
                    aria-label={`Scroll to next section`}
                />
            }
            {displayBackToTop &&
                <ScrollButton
                    onClick={() => scroll.scrollToTop()}
                    aria-label={`Scroll to top`}
                    scrolltoTop={true}
                />
            }
        </Container>
    )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex
  justify-content: center;
  align-items: center;
`;
const ScrollButton = styled.button`
    position: absolute;
    bottom: 0;
    left: calc(50% - 20px);
    display: block;
    width: 44px;
    height: 44px;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cG9seWdvbiBwb2ludHM9IjM5Ni42LDE2MCA0MTYsMTgwLjcgMjU2LDM1MiA5NiwxODAuNyAxMTUuMywxNjAgMjU2LDMxMC41ICIvPjwvc3ZnPg==) no-repeat center transparent;
    background-size: 44px;
    cursor: pointer;
    ${props => props.scrolltoTop && `transform: rotate(180deg);`}
`

export default FullHeightFlexContainer;