import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';

const Stack = createStackNavigator();  

function HomeScreen() {
  return (
      <View style={ styles.contentContainer }>
        <Text>
          Home Page
        </Text>
      </View>
  )
}

function SplashScreen({ navigation }) {

  setTimeout(() =>{
    navigation.navigate("Home")
  }, 30000);

  return (
        <View style={ styles.contentContainer }>
          <Image
            source={require('./assets/car-logo.avif')}
            style = {{ width: 200, height: 200 }} />
        </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "SplashScreen" headerMode = "none">
      <Stack.Screen name = "SplashScreen" component={SplashScreen} />
      <Stack.Screen name = "Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
