import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

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

    this.state.searchResults = this.state.products;
  }

  _searchProductsByText = text => {
    console.log('text: ', text.length);
    const {products} = this.state;

    let searchResults = [];
    products.forEach(product => {
      console.log('name: ', product.name.substr(0, 3));
      if (
        product.name
          .substr(0, text.length)
          .toLowerCase()
          .trim() === text.toLowerCase().trim()
      ) {
        searchResults.push(product);
      }
    });

    this.setState({searchResults});
  };

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
    const {searchResults} = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/2975/android/playstore-icon.png')}
          style={{width: 50, height: 50, alignSelf: 'center'}}
        />
        <View style={styles.header}>
          <TextInput
            placeholder="Digite aqui seu produtinho <3"
            onChangeText={text => this._searchProductsByText(text)}
            style={styles.searchTextInput}
          />
        </View>
        <ScrollView style={styles.body}>
          <ListView data={searchResults} renderRow={this._renderRow} />
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
    backgroundColor: '#F8F7F2',
  },
  header: {
    height: 100,
    marginBottom: 5,
  },
  body: {
    flex: 1,
    height: '100%',
  },
  rowItemWraper: {
    borderRadius: 10,
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
