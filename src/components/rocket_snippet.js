import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import { displayRocket } from '../actions/index';

class RocketSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    return (
      <div>
        <a onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.rocket.name}</a>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>             
              <p>Launch Pad > {this.props.rocket.location.pads[0].name}</p>
              <p>Wiki > {this.props.rocket.location.pads[0].wikiURL}</p>             
              <button onClick={() => this.props.displayRocket(this.props.rocket)}>Learn more</button>
            </CardBody>
          </Card>
        </Collapse>       
      </div>
    )
  }
}

export default connect(null, { displayRocket })(RocketSnippet);