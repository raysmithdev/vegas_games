import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, } from './common';

import * as actions from '../actions';

class PlayGame extends Component {

  componentDidMount() {
    // this.props.startNewRound();
  }

  hitDealer() {
    // Dealer stands on 15 and above
    while (this.state.dealerTotal < 15) {
      this.props.getNewCard({ prop: 'dealerCards' });
    }
  }

  hitPlayer() {
    console.log('hitPlayer playerTotal', this.props.playerTotal);
    this.props.getNewCard({ prop: 'playerCards' });
  }

  updatePlayerTotal() {
    // console.log('updatePlayerTotal called');
    const playerTotal = this.props.playerCards.reduce((sum, card) => {
      return sum + card.value;
    }, 0);
    this.props.updatePlayerTotal(playerTotal);
    return <Text>Player Total: {playerTotal}</Text>;
  }

  updateDealerTotal() {
    const dealerTotal = this.props.dealerCards.reduce((sum, card) => {
      return sum + card.value;
    }, 0);
    // this.props.updateDealerTotal(dealerTotal);
    return <Text>Dealer Total: {dealerTotal}</Text>;
  }

  renderPlayerHand() {
    console.log('================ renderPlayerHand ==================');
    console.log(this.props);
    return this.props.playerCards.map((card, index) => {
      return (
        <Text key={index}>{card.card} - {card.suite}</Text>
      );
    });
  }

  renderDealerHand() {
    return this.props.dealerCards.map((card, index) => {
      return (
        <Text key={index}>{card.card} - {card.suite}</Text>
      );
    });
  }

  renderPlayButton() {
    if (this.props.gameStatus === 'play') {
      return (
        <CardSection>
          <Button onPress={() => this.hitPlayer()}>Hit Me</Button>
          <Button onPress={() => this.hitDealer()}>Hold</Button>
        </CardSection>
      );
    } else {
      return (
        <CardSection>
          <Button onPress={this.playAgain}>{this.props.gameStatus} Game</Button>
        </CardSection>
      );
    }
  }

  render() {
    console.log('---------- RENDERING PlayGame COMPONENT ---------------');
    return (
      <Card>
        <CardSection>
          <Text>Dealer Cards</Text>
        </CardSection>
        <CardSection>
          <View>{this.renderDealerHand()}</View>
        </CardSection>
        <CardSection>
          {this.updateDealerTotal()}
        </CardSection>
        {this.renderPlayButton()}
        <CardSection>
          <Text>Player Cards</Text>
        </CardSection>
        <CardSection>
          <View>
            {this.renderPlayerHand()}
          </View>
        </CardSection>
        <CardSection>
          {this.updatePlayerTotal()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ game }) => {
  const { deck, dealerCards, dealerTotal, gameStatus, playerCards, playerTotal } = game;
  console.log('PlayGame props deck.length', deck.length);
  console.log('PlayGame Props dealerCards', dealerCards);
  console.log('PlayGame Props dealerTotal', dealerTotal);
  console.log('PlayGame Props playerCards', playerCards);
  console.log('PlayGame Props playerTotal', playerTotal);
  return { deck, dealerCards, dealerTotal, gameStatus, playerCards, playerTotal };
};

export default connect(mapStateToProps, actions)(PlayGame);
