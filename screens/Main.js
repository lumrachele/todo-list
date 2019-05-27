import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
// import { CheckBox } from 'react-native-elements'
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { WebBrowser } from 'expo';
import Note from './Note'

import { MonoText } from '../components/StyledText';

export default class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
      keyboardShown: false
    }
  }

  // componentDidMount() {
  //   // this.keyboardDidShowListener = Keyboard.addListener(
  //   //   'keyboardDidShow',
  //   //   this._keyboardDidShow,
  //   // );
  //   // this.keyboardDidHideListener = Keyboard.addListener(
  //   //   'keyboardDidHide',
  //   //   this._keyboardDidHide,
  //   // );
  // }
  //
  // componentWillUnmount() {
  //   // this.keyboardDidShowListener.remove();
  //   // this.keyboardDidHideListener.remove();
  // }
  //
  // _keyboardDidShow () {
  //   // this.setState({keyboardShown: true})
  // }
  //
  // // _keyboardDidHide() {
  // //   this.setState({keyboardShown: false})
  // // }



  render() {
    let notes = this.state.noteArray.map((val, key)=>{
      return <Note key={key} keyval={key} val={val} deleteMethod={()=>this.deleteNote(key)} prioritizeMethod={()=>{this.prioritize(key)}}/>
    })
    return (

      <KeyboardAvoidingView style={{flex:1}} behavior="padding">

          <View style={styles.container}>

            <View style={styles.header}>
              <Text style={styles.headerText}>
              TO DO LIST
              </Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
              {notes}
            </ScrollView>

            <View style={styles.footer}>
                <TextInput style={styles.textInput}
                onChangeText={(noteText)=>this.setState({noteText})}
                value={this.state.noteText}
                placeholder="to do"
                placeholderTextColor='white'
                >
                </TextInput>
            </View>

            <TouchableOpacity style={styles.addButton}
            onPress={()=>this.addNote()}
            >
              <Text style={styles.addButtonText}>
              +
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>


    );
  }
  addNote(){
    //
    if(!!this.state.noteText){
      let d = new Date()
      // alert(d.getFullYear())
      this.state.noteArray.push({
      'date': d.getFullYear()+'/'+(d.getMonth()+1)+'/'+(d.getDate()),
      'note': this.state.noteText
      })
      this.setState({
        noteArray: [...this.state.noteArray],
        noteText: ''
      })
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key, 1)
    this.setState({noteArray: this.state.noteArray})
  }
  prioritize(key){
    alert('you prioritized me')

  }
  //
  // adjustPadding(){
  //   this.state.keyboardShown ? 200:null
  // }
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
    // bottom: adjustPadding(),
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



// onSwipeUp={(state) => this.onSwipeUp(state)}
// onSwipeDown={(state) => this.onSwipeDown(state)}
// onSwipeLeft={(state) => this.onSwipeLeft(state)}
// onSwipeRight={(state) => this.onSwipeRight(state)}
// config={config}
//
// style={{
//   flex: 1,
//   backgroundColor: this.state.backgroundColor
// }}
