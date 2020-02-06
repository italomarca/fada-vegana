/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Testeihasduiahsdiuahdisudh</Text>
      </View>
      <View style={styles.body}>
        <Text>Testeihasduiahsdiuahdisudh</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: '#00F',
  },
  body: {
    flex: 1,
    backgroundColor: '#F00',
  }
});

export default App;
