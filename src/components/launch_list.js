import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import update from 'immutability-helper';

import { fetchRockets } from '../actions';

class LaunchList extends Component {
  constructor(props) {
    super(props);
    this.collapse = {};
    this.state = {
      collapse: {}
    };
  }

  toggle(id){
    this.setState({collapse: Object.assign({id: !this.state.collapse[id]}, this.state.collapse)});
    console.log(this.state);
  }

  componentDidMount() {
    this.props.fetchRockets();
    console.log(this.props.rockets);
    this.props.rockets.map(rocket => {
      this.collapse[rocket.id] = false;
    })
    this.setState({collapse: this.collapse});
  }

  renderRockets() {
    return this.props.rockets.map(rocket => {
      return (
        <div key={rocket.id}>
          <a onClick={() => this.toggle(rocket.id)}>{rocket.name}</a>
          <Collapse isOpen={this.state.collapse[rocket.id]}>
            <Card>
              <CardBody>
                {rocket.location.pads.name}
              </CardBody>
            </Card>
          </Collapse>
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