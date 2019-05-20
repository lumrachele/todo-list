import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // CheckBox
} from 'react-native';
// import { CheckBox } from 'react-native-elements'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
export default class Note extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isComplete: false
    }
  }

  render(){
    return(
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>
        {this.props.val.date}
        </Text>
        <Text style={styles.noteText}>
        {this.props.val.note}
        </Text>
        <CheckBox
        title='Click Here'
        checked={this.state.checked}
        />

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>delete</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    backgroundColor: 'red'
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#e91e63'
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText:{
    color: 'white'
  }
})
