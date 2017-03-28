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
    const newDeck = this.props.deck;
    const newCard = newDeck.pop();
    const newPlayerCards = this.props.playerCards;
    newPlayerCards.push(newCard);
    this.props.getNewPlayerCard(newPlayerCards, newDeck);
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
  return { playerCards, dealerCards, deck };
};

export default connect(mapStateToProps, {
  getNewPlayerCard,
})(DealerHand);
