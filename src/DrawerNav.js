import { DrawerNavigator } from 'react-navigation';
import { StyleSheet, View, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from './utils/navigation.js';
import NavBarItem from './NavBarItem';
import HomeScreen from '../HomeScreen.js';
import Settings from './settings/Settings.js';
import SignIn from './SignIn.js';
import CreatePosts from './CreatePosts.js';
import { drawerObject } from '../index.ios.js';

const FAKE_USER_ID = 2;

const getDrawerItem = navigation => (
  <View style={styles.row}>
    <NavBarItem
      iconName="bars"
      onPress={() => {
        console.log('bars');
        // check if drawer is not open
        if (navigation.state.index === 0) {
          // open drawer
          navigation.navigate('DrawerOpen');
        } else {
          // else close drawer
          navigation.navigate('DrawerClose');
        }
      }}
    />
    {navigation.state.index === 0 && <NavBarItem
      iconName="plus"
      onPress={() => {
        console.log('plus being clicked');
        navigation.navigate('CreatePosts')
      }}
    />}
    {navigation.state.index === 0 && <Switch style={styles.slider} onPress={()=> console.log('snooze clicked')}/>}
  </View>
);

const getSubs = (userId) => {

}

// icon generator function
const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;
// drawer icons:
const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const settingsDrawerIcon = ({ tintColor }) => getDrawerIcon('cog', tintColor);
const signinDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);

// drawer icon settings:
const homeNavOptions = getDrawerNavigationOptions('Home', 'rgba(0, 124, 220, 100)', 'white', homeDrawerIcon);
const settingsNavOptions = getDrawerNavigationOptions('Settings', 'rgba(0, 124, 220, 100)', 'white', settingsDrawerIcon);
const signinNavOptions = getDrawerNavigationOptions('Sign In', 'rgba(0, 124, 220, 100)', 'white', signinDrawerIcon);

// instantiate drawer
const Drawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
  SignIn : { screen: SignIn, navigationOptions: signinNavOptions },
  Settings: { screen: Settings, navigationOptions: settingsNavOptions },
}, getDrawerConfig(300, 'left', 'HomeScreen'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('AwesomeProject', 'rgba(0, 124, 220, 100)', 'white', getDrawerItem(navigation));

export default Drawer;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  slider: {
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
    right: -250
  },
});
