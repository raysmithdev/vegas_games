import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Button, Card, CardSection, Header } from './common';

import * as actions from '../actions';

class DealerHand extends Component {
  constructor() {
    super();
    this.hitPlayer = this.hitPlayer.bind(this);
  }

  hitPlayer() {
    const deck = this.props.deck;
    const card = deck.pop();
    const playerCards = this.props.playerCards;
    playerCards.push(card);
    this.props.getNewPlayerCard(playerCards, deck);
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

const mapStateToProps = ({ blackjack }) => {
  const { playerCards, dealerCards, deck } = blackjack;
  console.log('GameButton', dealerCards);
  return { playerCards, dealerCards, deck };
};

export default connect(mapStateToProps, actions)(DealerHand);
