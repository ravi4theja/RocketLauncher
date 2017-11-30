import React, {Component} from 'react';
import { connect } from 'react-redux';
import update from 'immutability-helper';

import { fetchRockets } from '../actions';
import RocketSnippet from './rocket_snippet';

class LaunchList extends Component {

  componentDidMount() {
    this.props.fetchRockets();
  }

  renderRockets() {
    return this.props.rockets.map(rocket => {
      return (
       <RocketSnippet key={rocket.id} rocket={rocket}/>
      )
    });
  }
  
  render() {
    return (
      <div className='left-component'>
        <h3>Rocket List</h3>
        <div>
          {this.renderRockets()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rockets: state.rockets
  }
}

export default connect(mapStateToProps, { fetchRockets })(LaunchList);