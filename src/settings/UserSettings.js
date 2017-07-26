import React from 'react';
import { StyleSheet, Text, View, ScrollView, Slider } from 'react-native';

export default class UserSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      upvoteThreshold: 0,
      distanceThreshold: 0,
      notifThreshold: 0,
    };
  }

  render() {
    return (
      <ScrollView>
        <Text>UserSettings Component</Text>
        <View style={styles.container}>
          <Text>Upvote Threshold: {this.state.upvoteThreshold}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.state.upvoteThreshold}
            onValueChange={(upvoteThreshold) => this.setState({upvoteThreshold})} />

          <Text>Distance Threshold: {this.state.distanceThreshold}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.state.distanceThreshold}
            onValueChange={(distanceThreshold) => this.setState({distanceThreshold})} />

          <Text>Daily Notification Limit: {this.state.notifThreshold}</Text>
          <Slider style={{width:200}} maximumValue={10} step={1}
            value={this.state.notifThreshold}
            onValueChange={(notifThreshold) => this.setState({notifThreshold})} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
})
