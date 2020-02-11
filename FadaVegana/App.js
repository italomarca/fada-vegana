import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import {TextInput} from '@shoutem/ui';

class App extends React.Component {
  constructor(ctx, props) {
    super(ctx, props);

    this.state = {
      searchText: '',
      products: [
        {
          id: 1,
          name: 'Feijão',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Inoar 1',
            },
            {
              optionNumber: 2,
              brand: 'Dia',
            },
            {
              optionNumber: 3,
              brand: 'Sei lá',
            },
          ],
        },
        {
          id: 2,
          name: 'Massa',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Inoar 2',
            },
            {
              optionNumber: 2,
              brand: 'Dia',
            },
            {
              optionNumber: 3,
              brand: 'Sei lá',
            },
          ],
        },
        {
          id: 2,
          name: 'Massa',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Inoar 2',
            },
            {
              optionNumber: 2,
              brand: 'Dia',
            },
            {
              optionNumber: 3,
              brand: 'Sei lá',
            },
          ],
        },
        {
          id: 2,
          name: 'Massa',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Inoar 2',
            },
            {
              optionNumber: 2,
              brand: 'Dia',
            },
            {
              optionNumber: 3,
              brand: 'Sei lá',
            },
          ],
        },
        {
          id: 2,
          name: 'Massa',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Inoar 2',
            },
            {
              optionNumber: 2,
              brand: 'Dia',
            },
            {
              optionNumber: 3,
              brand: 'Sei lá',
            },
          ],
        },
        {
          id: 2,
          name: 'Massa',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Inoar 2',
            },
            {
              optionNumber: 2,
              brand: 'Dia',
            },
            {
              optionNumber: 3,
              brand: 'Sei lá',
            },
          ],
        },
        {
          id: 2,
          name: 'Massa',
          description: '',
          options: [
            {
              optionNumber: 1,
              brand: 'Inoar 2',
            },
            {
              optionNumber: 2,
              brand: 'Dia',
            },
            {
              optionNumber: 3,
              brand: 'Sei lá',
            },
          ],
        },
      ],
    };
  }

  _renderRow = rowData => {
    return (
      <View style={styles.rowItemWraper}>
        <View style={styles.rowItemInnerWraper}>
          <Text style={styles.productDescription}>{rowData.name}</Text>
          {rowData.options &&
            rowData.options.map(data => (
              <View style={styles.brandOption}>
                <Text style={styles.brandOptionText}>{`Opção ${
                  data.optionNumber
                }`}</Text>
                <Text style={styles.brandOptionText}>{`Marca: ${
                  data.brand
                }`}</Text>
              </View>
            ))}
        </View>
      </View>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            placeholder="Digite aqui seu produtinho <3"
            onChangeText={text => this.setState({searchText: text})}
            style={styles.searchTextInput}
          />
        </View>
        <ScrollView style={styles.body}>
          <ListView data={products} renderRow={this._renderRow} />
        </ScrollView>
      </View>
    );
  }
}

const ListView = ({renderRow, data}) => {
  return data.map(row => {
    return renderRow(row);
  });
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
    backgroundColor: '#fff',
    height: '100%',
  },
  rowItemWraper: {
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: '#8FD5A6',
    borderWidth: 3,
    marginBottom: 10,
  },
  rowItemInnerWraper: {
    padding: 10,
  },
  productDescription: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchTextInput: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
    backgroundColor: 'transparent',
  },
  brandOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  brandOptionText: {
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;
