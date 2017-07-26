import React from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';

var { height, width } = Dimensions.get('window');

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Title - Click Me</Text>
      </View>
    );
  }

  renderAdminSettings(section) {
    return (
      <View>
        <AdminSettings />
      </View>
    );
  }

  renderUserSettings(section) {
    return (
      <View>
        <UserSettings />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text>Settings Screen</Text>
        <View style={styles.admin}>
          <Text>Admin Settings Panels</Text>
          <Accordion style={styles.accordion}
            sections={['Section 1', 'Section 2', 'Section 3']}
            renderHeader={this.renderHeader}
            renderContent={this.renderAdminSettings}
          />
        </View>
        <View style={styles.users}>
          <Text>User Settings Panels</Text>
          <Accordion
            sections={['Section 1', 'Section 2', 'Section 3']}
            renderHeader={this.renderHeader}
            renderContent={this.renderUserSettings}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 5,
  },
  title: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 124, 220, 100)',
    borderStyle: 'solid',
    borderWidth: 1.5,
    textAlign: 'center',
  },
});
