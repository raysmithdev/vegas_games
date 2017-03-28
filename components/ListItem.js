import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    console.log('ListItem row pressed');
  }
  render() {
    const { card } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.sectionStyle}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.card.card} {this.props.card.suite}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
