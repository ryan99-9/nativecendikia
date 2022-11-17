import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import {TextInput} from 'react-native-paper';
// import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: true,
      eye:require('../asset/close_eyes.png')
    };
  }


  render() {
    return (
      <ScrollView>
        <View style={{width: '100%', height: '100%',  alignItems: 'center', padding: 10, marginTop: '50%',}}>
            <View style={{ borderColor:'#8E220D', borderWidth:1, width:'100%', alignItems:'center', padding:20}}>
          <TextInput 
          label="Nama Siswa" mode="outlined" placeholder="tuliskan nama" outlineColor='#8E220D'  activeOutlineColor='#8E220D' placeholderTextColor='#8E220D' style={{width: '90%', justifyContent: 'center', marginBottom: 10}}/>
           
           <TouchableOpacity
            style={{ width: '90%', borderColor:'#8E220D', borderWidth:1,justifyContent: 'center', alignItems: 'center',  marginTop:30, padding: 10,  borderRadius: 20, backgroundColor: '#8E220D'}}
            onPress={() => this.props.navigation.navigate('HOME')} >
            <Text style={{color:'white'}}>Submit Presence</Text></TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
