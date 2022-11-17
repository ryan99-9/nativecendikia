import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
// import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: true,
      eye:require('../asset/close_eyes.png')
    };
  }
  onEye = () => {
    if(this.state.secure){
      this.setState({secure: false})
      this.setState({eye: require('../asset/open_eyes.png') })
    } else {
      this.setState({secure: true})
      this.setState({eye: require('../asset/close_eyes.png') })
    }
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            padding: 10,
            marginTop: '50%',
            // backgroundColor:'white'
          }}>
            <View style={{
              borderColor:'#065B87', borderWidth:1,
              width:'100%',
              alignItems:'center',
              padding:20,
              borderRadius:40,
            }}>
          <TextInput
            label="Nama"
            mode="outlined"
            placeholder="tuliskan nama"
            style={{width: '90%', justifyContent: 'center', marginBottom: 10}}
          />
          <TextInput
            label="No Hp"
            mode="outlined"
            placeholder="tuliskan No Hp"
            style={{width: '90%', justifyContent: 'center', marginBottom: 10}}
          />
          <TextInput
            label="Password"
            mode="outlined"
            placeholder="tuliskan Password"
            secureTextEntry={this.state.secure}
            style={{width: '90%', justifyContent: 'center', marginBottom: 10}}
            right={
              <TextInput.Icon
                icon={({size}) => (
                  <Image
                    source={this.state.eye}
                    style={{width: size, height: size}}
                  />
                )}
                onPress={this.onEye}
              />
            }
          />
           <TouchableOpacity
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 20,
              backgroundColor: '#065B87',
              marginTop:30,
              borderColor:'#065B87', borderWidth:1
            }}
            onPress={() => this.props.navigation.navigate('Login')}
            >
            <Text style={{color:'white'}}>Daftar</Text>
          </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
