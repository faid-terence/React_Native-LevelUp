import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableNativeFeedback, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = ()=> Alert.alert("My Title", "My message", [
    {text: 'Yes', onPress:()=> console.log("Yes")},
    {text: "No", onPress:()=>console.log("No")},
  ]);
  const handleAlert =()=> Alert.prompt("My Title", "My Message", (text)=> console.log(text))
  return ( 
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello React Native</Text>
     <TouchableNativeFeedback onPress={handlePress}>
     <Image source={{
        width: 200,
        height: 300,
        uri:"https://picsum.photos/200/300"}}/>
     </TouchableNativeFeedback>
     <Button
     color="orange"
      title='Hello Button' onPress={handleAlert}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
