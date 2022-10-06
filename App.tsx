import Header from './components/shared/Header.component';
import Login from './components/login/Login.page';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Home(props) {
  const { navigation } = props;

  return <View style={styles.innerContainer}>
    <Text>Home Page ...</Text>
    <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
      <Text>Go login...</Text>
    </TouchableOpacity>
  </View>
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRoute="Login"
            screenOptions={{
              headerMode: 'screen',
              header: (props) => 
                <Header navigation={props.navigation} />
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
