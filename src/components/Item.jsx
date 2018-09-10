import React, { Component } from 'react';
import styled from 'styled-components'
class Item extends Component {
  render() {
    return (
      <Container flex={this.props.flex}>
      	{this.props.children}
      </Container>
    )
  }
}

const Container = styled.div`
	margin: 0 0 45px;
	${p => p.flex && `
		display: flex;
		flex-wrap: nowrap;
		align-items: stretch;
	`}
`

export default Item