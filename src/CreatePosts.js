import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

const { height, width } = Dimensions.get('window');

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', 
      title: ''
    };

    this.sendTextInput = this.sendTextInput.bind(this);
  }

  sendTextInput () {

     const { navigate } = this.props.navigation;

     var form = {
      subredditId: this.props.screenProps.userData[0].subreddits[0].id,
      postId: null,
      userId: this.props.screenProps.userData[0].id,
      title: this.state.title,
      text: this.state.text,
      geotag: '454x, 565y',
      subId: this.props.screenProps.userData[0].subreddits[0].id,     
    }

    fetch("http://localhost:3000/api/messages", {
      method: "POST",
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(form)
    }).then((data) => {
      this.props.screenProps.fetchMessages();
      navigate('HomeScreen')

    }).catch((err) => {
      console.log('GOT AN ERROR', err);
    })
  }

  static navigationOptions = {
    title: 'Create Post',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title} placeholder="Title" onChangeText={(title) => this.setState({title}, () => {console.log('state changed', this.state.title)})} />
        <TextInput style={styles.message} placeholder="Message" onChangeText={(text) => this.setState({text}, () => {console.log('state changed', this.state.text)})} />
        <Button raised iconRight icon={{name: 'check'}} title='Submit Post' buttonStyle={styles.button} onPress={this.sendTextInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25,
  },
  title: {
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  message: {
    marginTop: 2,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  button: {
    marginTop: 2,
    backgroundColor:'rgba(0, 124, 220, 100)',
  },

});
