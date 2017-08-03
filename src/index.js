import React from 'react';
import { View } from 'react-native'
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import TestScreen from './components/TestScreen.js';
import { AppNavigator } from './Navigators.js';
import { appReducer, initialState } from './reducer';
import PushNotification from 'react-native-push-notification';
import notifications from './components/Notifications.js'

const TEMP_USER_ID = 1;

class App extends React.Component {

  componentDidMount() {
    this.fetchUserData();
    this.getPermissionForNotifications();
    navigator.geolocation.requestAuthorization();
    this.testPush();
    notifications.fetchNotifications(1);
    setTimeout(()=>{notifications.activateNotifications()}, 3000)
    // notifications.intervalFetchNotifications(1, 2000);

  }

  fetchUserData() {
    store.dispatch({type: 'FETCH_USER_DATA_REQUEST'});
    fetch(`http://localhost:3000/api/user?id=${TEMP_USER_ID}`)
    .then(res => res.json())
    .then(data => {
      // console.log('\nTHIS IS FETCHED USERDATA\n'+ JSON.stringify(data, null, 2));
      store.dispatch({type: 'FETCH_USER_DATA_SUCCESS', userData: data});
    })
    .catch(err => store.dispatch({type: 'FETCH_USER_DATA_FAILURE'}));
  }

  getPermissionForNotifications(){
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
      },
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      requestPermissions: true,
    });
  }

  testPush() { 
    PushNotification.localNotificationSchedule({
      message: "HereNow Notification Message", // (required)
      number: 1,
      date: new Date(Date.now() + (10 * 1000)) // in 3 secs
    });     
  }

  render() {
    return (
        <AppNavigator />
      );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

App = connect(mapStateToProps, initialState)(App);

const store = createStore(appReducer);



// setInterval(()=>{
//   console.log(store.getState())
// }, 5000)


class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


export { Root, App, store }

