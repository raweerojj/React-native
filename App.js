import React from 'react';
import Weather from './components/Weather'

export default class App extends React.Component {
  render() {
    return (
      //2
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      <Weather zipCode = "90110"/>
    );
  }
}
