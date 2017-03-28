import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView, Text, View } from 'react-native';

import { Button, Card, CardSection, Header } from './common';


import PlayerHand from './PlayerHand';
import DealerHand from './DealerHand';
import GameButtons from './GameButtons';

import * as actions from '../actions';

class PlayBlackJack extends Component {

  componentWillMount() {
    // this.props.initializeDeck();
    this.props.initializeBlackjackGame();
  }

  componentDidMount() {
    const deck = this.props.deck;
    const playerCards = [];
    playerCards.push(deck.pop());
    playerCards.push(deck.pop());
    const dealerCards = [];
    dealerCards.push(deck.pop());
    dealerCards.push(deck.pop());
    console.log('PlayBlackJack CDM', deck);
    this.props.startBlackjackGame(deck, playerCards, dealerCards);
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

const mapStateToProps = ({ blackjack }) => {
  const { playerCards, dealerCards, deck } = blackjack;
  return { playerCards, dealerCards, deck };
};

export default connect(mapStateToProps, actions)(PlayBlackJack);
