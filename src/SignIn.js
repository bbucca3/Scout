import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SocialIcon } from 'react-native-elements'

// https://github.com/oblador/react-native-vector-icons#installation

export default SignIn = (props) => (
  <View>
    <Text>Sign In!!!</Text>
    <View style={styles.row}>
      <TextInput style={styles.login} placeholder="Login" />
      <TextInput style={styles.pass} placeholder="Password" />
      <SocialIcon title='Sign In With Facebook' button type='facebook'/>
      <SocialIcon title='Sign In With Github' button type='github' />
      <SocialIcon title='Sign In With Twitter' button type='twitter' />
      <SocialIcon title='Sign In With Google' button type='google' style={styles.google} onPress={props.screenProps.handleGoogleSignIn}/>
    </View>

  </View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  login: {
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  pass: {
    marginTop: 2,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  google: {
    backgroundColor: 'red',
  },
});
