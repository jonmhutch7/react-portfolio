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
      <div>
        <ImageList>
          {
            this.state.instagramImages.map((item, i) => {
              return (
                <li key={i}>
                  <ImageLink href={item.link} target="_blank">
                    <Image src={item.enclosure.url} alt={"Instagram" + i} />
                  </ImageLink>
                </li>
              )
            }
          )}
        </ImageList>
      </div>
    )
  }
  componentDidMount() {
    this._getInstagramFeed();
  }
  _getInstagramFeed() {
    let parser = window ? new window.RSSParser() : null;
    if (parser) {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      parser.parseURL(CORS_PROXY + 'https://queryfeed.net/instagram?q=jonmhutch', (err, feed) => {
        if (feed && feed.items) this.setState({instagramImages: feed.items.slice(0,6)})
      })
    }
  }
}

const ImageList = styled.ul`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-gap: 3% 2%;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ImageLink = styled.a`
  opacity: 0.7;
  transition: opacity 0.2s ease;
  cursor: pointer;
  display: block;
  padding-bottom: 100%;
  position: relative;
  &:hover {
    opacity: 1;
    img {
      -webkit-filter: none;
      filter: none;
    }
  }
`
const Image = styled.img`
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  transition: filter 0.2s ease;
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`

export default Instagram