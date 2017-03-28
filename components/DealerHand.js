import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView, Text, View } from 'react-native';
import ListItem from './ListItem';

class DealerHand extends Component {

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ dealerCards }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // console.log('ds', playerCards);
    this.dataSource = ds.cloneWithRows(dealerCards);
  }

  renderRow(card) {
    // console.log('renderRow', card);
    return <ListItem card={card} />;
  }

  renderDealerTotal() {
    const total = _.reduce(this.props.dealerCards, (sum, card) => {
      return sum + card.value;
    }, 0);
    return <Text style={styles.titleStyle}>Dealer Total: {total}</Text>;
  }

  render() {
    console.log('Dealer render', this.props.dealerCards);
    return (
      <View style={styles.viewStyle}>
        {this.renderDealerTotal()}
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  viewStyle: {
    alignItems: 'center',
    marginTop: 10,
  }
};

const mapStateToProps = ({ blackjack }) => {
  const { dealerCards } = blackjack;
  return { dealerCards };
};

export default connect(mapStateToProps)(DealerHand);
