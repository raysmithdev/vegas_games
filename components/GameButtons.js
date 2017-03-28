import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Button, Card, CardSection, Header } from './common';

import {
  getNewPlayerCard,
} from '../actions';

class DealerHand extends Component {
  constructor() {
    super();
    this.hitPlayer = this.hitPlayer.bind(this);
  }

  hitPlayer() {
    this.props.getNewPlayerCard();
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => this.hitPlayer()}>Hit Me</Button>
          <Button>Hold</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, {
  getNewPlayerCard
})(DealerHand);
