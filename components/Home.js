import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { Button, Card, CardSection, } from './common';
import * as actions from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.initializeDeck();
  }

  startBlackJack() {
    Actions.playBlackJack();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.titleStyle}>Choose Your Favorite Card Game</Text>
        </CardSection>
        <CardSection>
          <Button onPress={this.startBlackJack.bind(this)}>PlayBlackJack</Button>
        </CardSection>
      </Card>
    );
  }
}

styles = {
  titleStyle: {
    fontSize: 20,
    alignItems: 'center',
    padding: 5,
    color: 'black'
  },
};


export default connect(null, actions)(Home);
