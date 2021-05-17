import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';

const ExpandableTextContainer = ({ children, initialHeight = 350, moreText, lessText, ariaLabel }) => {
  const [expandedContent, setExpandedContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef(null);

  const toggleExpandContent = () => {
    setExpandedContent(!expandedContent);
  };

  useEffect(() => {
    const isOverflowing = containerRef.current.scrollHeight > initialHeight;
    setShowButton(isOverflowing);
  }, [showButton]);

  return (
    <ExpandableContainerWrapper>
      <ExpandableContainer
        ref={containerRef}
        isOpen={expandedContent}
				initialHeight={initialHeight}
      >
        {children}
      </ExpandableContainer>
      {showButton && (
				<>
					<Gradient isOpen={expandedContent} />
					<Button
						onClick={toggleExpandContent}
						aria-label={ariaLabel}
					>
						{expandedContent ? lessText : moreText}
					</Button>
				</>
      )}
    </ExpandableContainerWrapper>
  );
};

const ExpandableContainerWrapper = styled.div`
	position: relative;
`;

const ExpandableContainer = styled.div`
	overflow-y: hidden;
	transition: max-height 0.3s ease;
  max-height: ${props => props.isOpen ? '1540px' : `${props.initialHeight}px`};
	*:last-child {
		margin-bottom: 30px;
	}
`

const Button = styled.button`
	position: absolute;
	cursor: pointer;
	right: 0;
	bottom: -10px;
	color: #71210c;
	font-size: 18px;
	&:hover {
		text-decoration: underline;
	}
`
const Gradient = styled.span`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 75%;
	transition: opacity 0.3s ease;
	background: linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0) 100%);
	opacity: ${props => props.isOpen ? '0' : '1'};
	pointer-events: none;
`

export default ExpandableTextContainer;
