import React, { Component } from 'react';
import styled from 'styled-components'
import 'rss-parser/dist/rss-parser.min.js';

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = { instagramImages: [] };
    this._getInstagramFeed = this._getInstagramFeed.bind(this);
  }
  render() {
    return (
      <InstagramContainer show={this.state.instagramImages.length > 0}>
        <ImageList>
          {
            this.state.instagramImages.map((item, i) => {
              return (
                <ImageLine key={i}>
                  <ImageLink href={item.link} target="_blank">
                    <Image src={item.enclosure.url} alt={"Instagram" + i} />
                  </ImageLink>
                </ImageLine>
              )
            }
          )}
        </ImageList>
      </InstagramContainer>
    )
  }
  componentDidMount() {
    this._getInstagramFeed();
  }
  _getInstagramFeed() {
    let parser = new RSSParser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    parser.parseURL(CORS_PROXY + 'https://queryfeed.net/instagram?q=jonmhutch', (err, feed) => {
      if (feed && feed.items) this.setState({instagramImages: feed.items.slice(0,6)})
    })
  }
}

const InstagramContainer = styled.div`
  opacity: ${p => p.show ? '1' : '0'};
  transition: opacity 0.2s ease;
`
const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ImageLine = styled.li`
  flex-grow: 1;
  flex-basis: 33%;
  flex-shrink: 1;
`
const ImageLink = styled.a`
  opacity: 0.7;
  transition: opacity 0.2s ease;
  cursor: pointer;
  &:hover {
    opacity: 1
    img {
      -webkit-filter: none;
      filter: none;
    }
  }
`
const Image = styled.img`
  width: 100%;
  padding: 5px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  transition: filter 0.2s ease;
`

export default Instagram