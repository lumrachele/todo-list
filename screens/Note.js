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

  onSwipe(gestureName) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    // this.setState({gestureName: gestureName});
    // switch (gestureName) {
    //   case SWIPE_UP:
    //     this.setState({backgroundColor: 'red'});
    //     break;
    //   case SWIPE_DOWN:
    //     this.setState({backgroundColor: 'green'});
    //     break;
    //   case SWIPE_LEFT:
    //     this.setState({backgroundColor: 'blue'});
    //     break;
    //   case SWIPE_RIGHT:
    //     this.setState({backgroundColor: 'yellow'});
    //     break;
    // }
    console.log('You swiped', gestureName)
  }


  render(){
    return(
      <GestureRecognizer
     onSwipe={(direction) => this.onSwipe(direction)}

     >
        <View key={this.props.keyval} style={styles.note}>
          <Text style={styles.noteText}>
          {this.props.val.date}
          </Text>
          <Text style={styles.noteText}>
          {this.props.val.note}
          </Text>


          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>delete</Text>
          </TouchableOpacity>
        </View>
      </GestureRecognizer>
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
