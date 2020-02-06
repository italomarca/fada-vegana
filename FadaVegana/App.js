import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { TextInput, ListView } from '@shoutem/ui';

class App extends React.Component {
  constructor(ctx, props) {
    super();

    this.state = {
      searchText: '',
      products: [
        { 
          name: 'Feijão',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Nestle'
            },
            {
              optionNumber: 2,
              brand: 'Dia'
            },
            {
              optionNumber: 3,
              brand: 'Sei lá'
            }
          ]
        },
        { 
          name: 'Massa',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Nestle'
            },
            {
              optionNumber: 2,
              brand: 'Dia'
            },
            {
              optionNumber: 3,
              brand: 'Sei lá'
            }
          ]
        }
      ]
    }
  }

  _renderRow = rowData => {
    return(
      <View style={styles.rowItemWraper}>
        <Text style={styles.rowItem}>
          {rowData.name}
        </Text>
        {
          rowData.options && rowData.options.map(data => (
            <React.Fragment>
              <Text style={styles.rowItem}>
                {`Opção ${data.optionNumber}`}
              </Text>
              <Text style={styles.rowItem}>
                {`Marca ${data.brand}`}
              </Text>
            </React.Fragment>
          ))
        }
      </View>
    )
  }

  render() {
    const { products } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            placeholder="Digite aqui seu produtinho"
            onChangeText={text => this.setState({searchText: text})}
            style={{flex: 1, fontSize: 18, textAlignVertical: 'bottom', backgroundColor: 'transparent'}}
          />
        </View>
        <View style={styles.body}>
          <ListView
            data={products}
            renderRow={this._renderRow}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    marginBottom: 5,
  },
  body: {
    flex: 1,
  },
  rowItemWraper: {
    padding: 5,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 5,
  },
  rowItem: {
    flexShrink: 1,
    backgroundColor: 'transparent'
  }
});

export default App;
