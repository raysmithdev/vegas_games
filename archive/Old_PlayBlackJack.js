import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Button, Card, CardSection, Header } from './common';

import * as actions from '../actions';

class Old_PlayBlackJack extends Component {
  constructor() {
    super();
    this._StartNewGame = this._StartNewGame.bind(this);
    this._HitPlayer = this._HitPlayer.bind(this);
    this._HitDealer = this._HitDealer.bind(this);
    this._UpdateDealerTotal = this._UpdateDealerTotal.bind(this);
    this._UpdatePlayerTotal = this._UpdatePlayerTotal.bind(this);
    this.renderPlayerHand = this.renderPlayerHand.bind(this);
    this.renderDealerHand = this.renderDealerHand.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  componentDidMount() {
    console.log('================ Playing BlackJack ==================');
    this.props.initializeBlackjackGame();
    this.props.initializeDeck(1);
  }

  _HitPlayer() {
    console.log('Hit Player called');
    this.props.getNewCard();
  }

  _HitDealer() {
    console.log('_HitDealer called');
    this.props.getNewCard({ prop: 'dealerCards' });
  }

  _UpdatePlayerTotal() {
    // console.log('updatePlayerTotal called');
    const playerTotal = this.props.playerCards.reduce((sum, card) => {
      return sum + card.value;
    }, 0);
    this.props.updatePlayerTotal(playerTotal);
    // return (<Text>Player Total: {playerTotal}</Text>);
  }

  _UpdateDealerTotal() {
    // console.log('updatePlayerTotal called');
    const dealerTotal = this.props.dealerCards.reduce((sum, card) => {
      return sum + card.value;
    }, 0);
    this.props.updateDealerTotal(dealerTotal);
    // return (<Text>Dealer Total: {dealerTotal}</Text>);
  }

  _StartNewGame() {
    this.props.startBlackjackGame();
  }

  renderDealerHand() {
    return this.props.dealerCards.map((card, index) => {
      return (
        <Text key={index}>{card.card} - {card.suite}</Text>
      );
    });
  }

  renderPlayerHand() {
    console.log('================ renderPlayerHand ==================');
    console.log(this.props.playerCards);
    this._UpdatePlayerTotal();
    return this.props.playerCards.map((card, index) => {
      console.log(index)
      return (
        <CardSection key={index}><Text>{card.card} - {card.suite}</Text></CardSection>
      );
    });
  }


  renderScene() {
    const { gameStatus } = this.props;
    switch (gameStatus) {
      case 'new':
        return (
          <CardSection>
            <Button onPress={() => this._StartNewGame()}>
              New Game
            </Button>
          </CardSection>
        );

      case 'play':
        return (
          <View>
            <CardSection>
              <Text>Dealer Cards</Text>
            </CardSection>
            <CardSection>
              {this._UpdateDealerTotal}
            </CardSection>
            <CardSection>
              <Text>Dealer total from props: {this.props.dealerTotal}</Text>
            </CardSection>
            <CardSection>
              {this.renderDealerHand()}
            </CardSection>
            <CardSection>
              <Button onPress={() => this._HitPlayer()}>Hit Me</Button>
              <Button onPress={() => this._HitDealer()}>Hold</Button>
            </CardSection>
            <CardSection>
              <Text>Player Cards</Text>
            </CardSection>
            <CardSection>
              {this.renderPlayerHand()}
            </CardSection>
            <CardSection>
              <Text>Player total from props: {this.props.playerTotal}</Text>
            </CardSection>
          </View>
        );

      default:
        return (<Text>Something Wrong Here</Text>);
    }
  }

  render() {
    console.log('================ Render Scene ==================');
    const { deck, dealerCards, dealerTotal, gameStatus, playerCards, playerTotal } = this.props;

    console.log('PlayGame Props playerCards', playerCards);

    return (
      <Card>

      </Card>
    );
  }
}

const mapStateToProps = ({ blackjack }) => {
  const { deck, dealerCards, dealerTotal, gameStatus, playerCards, playerTotal } = blackjack;
  console.log('================ mapStateToProps ==================');
  console.log('PlayGame Props playerCards', playerCards);
  return { deck, dealerCards, dealerTotal, gameStatus, playerCards, playerTotal };
};

export default connect(mapStateToProps, actions)(PlayBlackJack);
