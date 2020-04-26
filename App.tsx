import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, WhiteSpace} from '@ant-design/react-native';
import uiStore from './store';
import action from './action';
import {observer} from 'mobx-react';
import CountDown from 'react-native-countdown-component';

@observer
export default class App extends Component {

  static triggerClockStart(minutes) {
    action.startClock(minutes);
  }

  render() {
    return (
      <View style={styles.container}>
        <CountDown
          until={uiStore.min * 60}
          //onFinish={() => alert('Done')}
          showSeparator
          size={50}
          timeToShow={['M', 'S']}
          timeLabels={{m: '', s: ''}}
        />
        <View style={styles.buttons}>
          <Button onPressOut={() => {App.triggerClockStart(10)}} style={styles.button}><Text>10 min</Text></Button>
          <Button onPressOut={() => {App.triggerClockStart(20)}} style={styles.button}><Text>20 min</Text></Button>
          <Button onPressOut={() => {App.triggerClockStart(30)}} style={styles.button}><Text>30 min</Text></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '10%',
  },
  button: {
    margin: 5,
  },
  clock: {
    fontSize: 100
  }
});
