import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView, Text, View } from 'react-native';
import ListItem from './ListItem';

class PlayerHand extends Component {
  constructor() {
    super();
    this.createDataSource = this.createDataSource.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderPlayerTotal = this.renderPlayerTotal.bind(this);
  }

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('PlayerHand CWRP', nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource({ playerCards }) {
    // console.log('PlayerHand dataSource', playerCards);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // console.log('ds', playerCards);
    this.dataSource = ds.cloneWithRows(playerCards);
  }

  renderRow(card) {
    // console.log('renderRow', card);
    return <ListItem card={card} />;
  }

  renderPlayerTotal() {
    const total = _.reduce(this.props.playerCards, (sum, card) => {
      return sum + card.value;
    }, 0);
    return <Text style={styles.titleStyle}>Player Total: {total}</Text>;
  }

  render() {
    // console.log('PlayerHand render', this.props.playerCards);
    return (
      <View style={styles.viewStyle}>
        {this.renderPlayerTotal()}
        <ListView
          style={styles.listViewStyle}
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
  const { playerCards } = blackjack;
  // console.log('PlayerHand mapStateToProps', playerCards);
  return { playerCards };
};

export default connect(mapStateToProps)(PlayerHand);
