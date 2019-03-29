import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [title, setTitle] = useState('Hello World!');

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
      <Button title="Change me!" onPress={() => setTitle('AtilaDev')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

export default App;
