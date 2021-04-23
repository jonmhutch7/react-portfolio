import React, { Component } from 'react';
import styled from 'styled-components'
class Item extends Component {
  render() {
    return (
      <Container flex={this.props.flex} active={this.props.active}>
      	{this.props.children}
      </Container>
    )
  }
}

const Container = styled.div`
	margin: 0 0 45px;
  @media screen and (max-width: 767px) {
    margin: 0 0 35px;
    display: none;
    ${p => p.active && `
      display: block;
    `}
  }
	${p => p.flex && `
		display: flex;
		flex-wrap: nowrap;
		align-items: stretch;
	`}
  
`

export default Item