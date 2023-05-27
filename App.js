import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useForm,Controller } from 'react-hook-form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './assets/styles/styles';
import HomeTabs from './components/HomeTabs';

const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

