import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Main extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
          <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>TO DO LIST</Text>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  header: {

  },
  headerText: {

  }
});
