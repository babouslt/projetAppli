import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Characters from './src/screens/characters';
import DemonFruits from './src/screens/demonFruits';
import Sagas from './src/screens/sagas';
import News from './src/screens/news';
const Stack = createNativeStackNavigator();

function App() {
  //<Stack.Screen name="News" component={News} />
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          contentStyle: {
            backgroundColor: 'black',
          },
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Demon Fruits" component={DemonFruits} />
        <Stack.Screen name="Sagas" component={Sagas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
