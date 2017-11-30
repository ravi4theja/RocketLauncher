import React, { Component } from 'react';
import { connect } from 'react-redux';

class RocketDetail extends Component {
  render() {
    if(Object.keys(this.props.rocketSelected).length === 0 && this.props.rocketSelected.constructor === Object) {
      return (
        <div className='right-component'>
          Pick a Rocket, Human!
        </div>
      )
    }

    return (
      <div className='right-component'>
        <p>Family > {this.props.rocketSelected.rocket.familyname}</p>
        <p>Location > {this.props.rocketSelected.location.name}</p>
        <img src={this.props.rocketSelected.rocket.imageURL} alt='Rocket Bruh'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rocketSelected: state.rocketSelected
  }
}

export default connect(mapStateToProps)(RocketDetail);