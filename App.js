import { StyleSheet, Text, View } from 'react-native';
import Mainpage from './Screen/Allscreen/Mainpage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menuscreen from './Screen/Allscreen/Menuscreen';
import { NavigationContainer } from '@react-navigation/native';
import Cart from './Screen/Allscreen/Cart';



const Tab = createBottomTabNavigator();

const App = () => {
  return (


    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Mainpage}  />
        <Tab.Screen name="Menu" component={Menuscreen} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
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
});
export default App;