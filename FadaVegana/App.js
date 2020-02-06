import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Testeihasduiahsdiuahdisudh</Text>
        </View>
        <View style={styles.body}>
          {/* <ListView
            data={restaurants}
            renderRow={() => ''}
          /> */}
        </View>
      </View>
    );
  }
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
