import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View ,ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './Components/LoginScreen';
import HomeScreen from './Components/HomeScreen';
import AfficheChecked from './Components/AfficheChecked';

class App extends Component {
  render() {
    return (
      <View> 
     
        <LoginScreen navigation={this.props.navigation} />
      
       
      </View>

    );
  }
}
const AppStackNavigator = createStackNavigator({
  App: {
    screen: App
  },
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Affiche: {
    screen: AfficheChecked
  }




});
const yas = createAppContainer(AppStackNavigator);
export default yas;