import React, { Component } from 'react';
import styled from 'styled-components';

class Column extends Component {
  render() {
    return (
      <Container>
      	{this.props.children}
      </Container>
    )
  }
}

const Container = styled.div`
	flex-grow: 1;
	flex-basis: 50%;
	flex-shrink: 1;
	padding: 0 50px;
	border-right: 1px solid #ededed;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
    max-width: 600px;
    margin: 0 auto;
    border-right: 0;
  }
`

export default Column