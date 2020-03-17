import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;




// create a fucntion in paretn called here which gives the selected gif image
