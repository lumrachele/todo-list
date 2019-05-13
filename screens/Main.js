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
              <Text style={styles.headerText}>
              TO DO LIST
              </Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
            </ScrollView>

            <View style={styles.footer}>
              <TextInput style={styles.textInput}
              placeholder="to do"
              placeholderTextColor='white'
              >

              </TextInput>
            </View>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>
              +
              </Text>
            </TouchableOpacity>


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
    backgroundColor: '#e91e63',
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 5,
    borderTopColor: '#ededed',
  },
  addButton:{
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#e91e63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  }
});
