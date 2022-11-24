import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable, List } from 'react-native-paper';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:"",
      id_pengajar:"",
      id_siswa:[],
      number:null,
      //data siswa yang ditampilkan 
      data_siswa:[],
    };
  }
  //agar punya ide khusus ketika di klik
  handlePress = (index) => {this.setState({number:index}),console.log(`index ${index}`);} 
  componentDidMount(){
    AsyncStorage.getItem('id',(err,res)=>{
      this.setState({id_pengajar:res});
      console.log(`Id Pengajar : ${res}`);
    })
    //Ambil data siswa yang diajar (api biaya, api data pengajar, api data siswa)
    AsyncStorage.getItem('token',(err,res)=>{
      Axios.get(`https://admin.menujudigital.com/api/biaya`,{headers: {
        Authorization: `Bearer ${res}`
      }}).then(res =>{
        res.data.map(item=>{
          if(item.id_pengajar === this.state.id_pengajar)
          {this.setState({id_siswa:item.id_siswa})}
        })
      })
    })
    AsyncStorage.getItem('token',(err,res)=>{
        Axios.get(`https://admin.menujudigital.com/api/dataortusiswa/${this.state.id_siswa.map(x=>{return x})}`,{headers: {
          Authorization: `Bearer ${res}`
        }}).then((res) =>{ console.log(res.data), this.setState({data_siswa:res.data})
        res.data.map(item=>{
            console.log(`nama siswa : ${item.nama_siswa}`)
        })})
      })
  }
  
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../asset/Iklan2.jpg')}
          style={{width:'100%',height:'100%',resizeMode:'cover'}}>
            <ScrollView style={{height:'100%',width:'100%',paddingStart:20,paddingEnd:2,marginTop:20}}>
            <List.Section title='Siswa Anda' 
            titleStyle={{marginTop:70,textAlign:'center',color:'#628E90',fontSize:30,fontWeight:'bold'}}>
            {this.state.data_siswa.map((item,index)=>{
                return (
            <List.Accordion key={index}
                title={item.nama_siswa}
                titleStyle={{color:'#665A48',fontSize:20,fontWeight:'bold'}}
                expanded={index === this.state.number?true:false }
                right={props => <></>}
                onPress={()=>this.handlePress(index)}>
                 <DataTable>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> Nama Orang Tua</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{item.nama_orangtua}</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> Kelas </Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{item.kelas}</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> Alamat </Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{item.alamat},{item.kecamatan},{item.kota}</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> Regional </Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{item.regional}</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> Hp </Text></DataTable.Cell>
                <DataTable.Cell ><Text style={styles.textRow}>{item.no_telp}</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> email </Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{item.email}</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> Jadwal Les </Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{item.jadwal_les}</Text></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text style={styles.textHeader}> Mapel </Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{item.mapel}</Text></DataTable.Cell>
                </DataTable.Row>
            </DataTable>
            </List.Accordion>
                )
            })}
            </List.Section>
            </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    textHeader: {
      color: "#AA8B56",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    textRow: {
      color: "#749F82",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    }
  });
export default Home;
