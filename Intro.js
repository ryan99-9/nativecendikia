import React, {Component} from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
// import axios from "axios";

class Intro extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            height: '40%',
            width: '80%',
            marginTop: '50%',
            marginBottom: '10%',
            marginHorizontal: '10%',
          }}
          source={require('./asset/homee.png')}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
          Selamat Datang di Cendikia!
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 30}}>
          Belajar Menjadi Lebih Menyenangkan
        </Text>
        <View style={{width: '80%', marginStart: '10%', marginEnd: '10%'}}>
           <TouchableOpacity
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 20,
              backgroundColor: '#065B87',
              marginBottom:5,
              borderColor:'#065B87', borderWidth:1
            }}
            onPress={() => this.props.navigation.navigate('Login')}
            >
            <Text style={{color:'white'}}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 20,
              backgroundColor: 'white',
              borderColor:'#065B87', borderWidth:1
            }}
            onPress={() => this.props.navigation.navigate('Register')}
            >
            <Text>Daftar</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

export default Intro;
