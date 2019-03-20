import React,{Component} from 'react';
import {View,Text} from 'react-native';



 export default class HomeScreen extends Component {
 render() {
     return(
        <View >
                            <Text>{this.props.title}</Text>
                            <Text>{this.props.price}</Text>
                        </View>
     );
 }
 }