import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <div>
        <ul>
          {this.props.bands.map( b => {
            return <Band band={b} deleteBand={this.props.deleteBand} />
          })}
        </ul>
      </div>
    );
  }
};




export default Bands;
