import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text,CheckBox,ScrollView } from 'react-native';



export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
       this.state={
           check:false,
           check1:false,
           check2:false,
           tableau:[
               food='0',
               Uber='0',
               tek='0',
           ]
       }
    }
    
   
    checkBoxTest(){
        this.setState({
            check:!this.state.check
           
        })
        if (!this.state.check) 
        
            {alert('Delivery food')}
        else {}
    }

    check1BoxTest(){
        this.setState({
            check1:!this.state.check1
        })
        if (!this.state.check1) 
            
        { alert ('Delivery Uber');}
    else {}
    }
    check2BoxTest(){
        this.setState({
            check2:!this.state.check2
        })
        if (!this.state.check2) 
            
        { alert ('Delivery Tek');}
    else {}
    }
    render() {
        return (
            <View >
               
               <CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}  />
               <Text>Delivery Food</Text>
               <CheckBox value={this.state.check1} onChange={()=>this.check1BoxTest()}/>
               <Text>Uber</Text>
               <CheckBox value={this.state.check2} onChange={()=>this.check2BoxTest()}/>
               <Text>Delivery tek</Text>
               <TouchableOpacity onPress={() => (this.props.navigation.navigate('Affiche'))} >

<Text >CREATE ACCOUNT</Text>
</TouchableOpacity>

            </View>

        );
    }
}