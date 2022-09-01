import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {



  return (
    <View style={styles.container}>
      <View style={styles.tInput}>
        <TextInput placeholder='Text'/>
        <Button title='boton' onPress={() => console.log('boton')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaf',
  },
  tInput: {
    marginTop:'50',
  },
  button: {

  },
});