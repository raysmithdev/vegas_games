import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView, Text, View } from 'react-native';
import { Button, Card, CardSection, Header } from './common';

import PlayerHand from './PlayerHand';
import DealerHand from './DealerHand';
import GameButtons from './GameButtons';

import {
  initializeBlackjackGame,
  initializeDeck,
  startBlackjackGame,
} from '../actions';

class PlayBlackJack extends Component {

  componentWillMount() {
    this.props.initializeBlackjackGame();
    this.props.initializeDeck();
  }

  componentDidMount() {
    this.props.startBlackjackGame();
  }


  render() {
    return (
      <ScrollView>
        <DealerHand />
        <GameButtons />
        <PlayerHand />
      </ScrollView>
    );
  }
}

export default connect(null, {
  initializeBlackjackGame,
  initializeDeck,
  startBlackjackGame,
})(PlayBlackJack);
