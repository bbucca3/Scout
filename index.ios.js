import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Settings from './src/settings/Settings.js';
import AdminSettings from './src/settings/AdminSettings.js';
import UserSettings from './src/settings/UserSettings.js';
import ModalBar from './src/ModalBar.js';
import CreatePosts from './src/CreatePosts.js';
import PostList from './src/PostList.js';
import PostPreview from './src/PostPreview.js';
import PostView from './src/PostView.js';
import SignIn from './src/SignIn.js';
import Drawer from './src/Drawer.js';
import HomeScreen from './HomeScreen.js';

class AwesomeProject extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/user?id=3`)
    .then(response => response.json())
    .then(data => {
      this.setState({userData: data});
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  handleGoogleSignIn(){
    console.log('handle google search has been called!')
  }

  render() {
    return <Stack screenProps={{userdata: this.state.userData, handleGoogleSignIn: this.handleGoogleSignIn}}/>
  }
}

const Stack = StackNavigator({
  Drawer: { screen: Drawer },
  Home: { screen: HomeScreen },
  Settings: { screen: Settings },
  AdminSettings: { screen: AdminSettings },
  UserSettings: { screen: UserSettings },
  PostView: { screen: PostView },
  SignIn: { screen: SignIn },
  CreatePosts: { screen: CreatePosts },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
