import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Constants } from 'expo';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your name"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <Button style={styles.inputButton} title="ADD" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 26,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    width: '70%',
  },
  inputButton: {
    width: '30%',
  },
});
