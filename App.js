import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';'@react-navigation/bottom-tabs';


import HomeScreenComponent from './stackbased/homecomponent';
import AboutScreenComponent from './stackbased/aboutcomponent';
import ContactScreenComponent from './stackbased/contactcomponent';
import CategoryListComponent from './stackbased/passingparameters/categorylistcomponent';
import ProductListComponent from './stackbased/passingparameters/productlistcomponent';
import FirstComponent from './tabednavigation/firstcomponent';
import SecondComponent from './tabednavigation/secondcomponent';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName='CategoryList'> */}
           {/* <Stack.Screen name='Home' component={HomeScreenComponent}/>
           <Stack.Screen name='About' component={AboutScreenComponent} options={{title:'Hi I am Maehsh'}}/>
           <Stack.Screen name='Contact' component={ContactScreenComponent}/>
            */}
           {/* <Stack.Screen name="CategoryList" 
           component={CategoryListComponent}
            options={{title: 'Category List',headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }}}
           />  */}
           {/* <Stack.Screen name="ProductList" 
           component={ProductListComponent}
           options={{title: 'Product List',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}}
           />  */}
        {/* </Stack.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen name='First' component={FirstComponent}/>
          <Tab.Screen name='Second' component={SecondComponent}/>
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
