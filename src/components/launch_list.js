import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchRockets } from '../actions';
class LaunchList extends Component {

  componentDidMount() {
    this.props.fetchRockets();
  }

  renderRockets() {
    return _.map(this.props.rockets, rocket => {
      return (
        <div key={rocket.id}>
          <a data-toggle='collapse' href={'#' + rocket.id} aria-expanded='false' aria-controls={rocket.id}>{rocket.name}</a>
          <div className='collapse multi-collapse' id={rocket.id}>
            <div className='card card-body'>
              {rocket.location.pads.name}
            </div>
          </div>
        </div>
      )
    });
  }
  
  render() {
    return (
      <div>
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