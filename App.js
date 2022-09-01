import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {



  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Text puto'/>
        <Button title='boton' onPress={() => console.log('boton')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaf',
    alignItems:'center',
    justifyContent:'center',
  },
});