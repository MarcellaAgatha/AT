import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/titulo';
import Formulario from './src/components/formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Formulario/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 80,
  },
});
