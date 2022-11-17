import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  Image,
  FlatList,
  View,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Paragraph,
  Title,
} from 'react-native-paper';
// import axios from "axios";
const {width, height} = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;
const data = [
  'https://www.thecompleteuniversityguide.co.uk/commimg-cug/myhotcourses/blog/rich/myhc_81263.jpg',
  'https://online.essex.ac.uk/wp-content/uploads/2016/06/OldBlog_16_FB.png',
  'https://www.managementstudyhq.com/wp-content/uploads/2020/05/Study-Marketing.jpg',
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: 'dummy',
      carouselData: [
        // '../asset/dummy_carousel1.jpg',
        // '../aasset/dummy_carousel2.jpg',
        // '../asset/dummy_carousel3.jpg',
        [require('../asset/iklan23.jpg'),`Promo Menarik Bulan Juni, daftarkan segera`],
        [require('../asset/iklan4.jpg'),`Text2`],
        [require('../asset/iklan12.jpg'),`Text3`],
        [require('../asset/iklan33.jpg'),`Text4`],
        // 'https://www.thecompleteuniversityguide.co.uk/commimg-cug/myhotcourses/blog/rich/myhc_81263.jpg',
        // 'https://online.essex.ac.uk/wp-content/uploads/2016/06/OldBlog_16_FB.png',
        // 'https://www.managementstudyhq.com/wp-content/uploads/2020/05/Study-Marketing.jpg',
      ],
    };
  }
  render() {
    return (
      <ScrollView>
        {/* Bar Atas */}
        <View
          style={{
            backgroundColor: '#065B87',
            width: '100%',
            height: 150,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={{flex: 0.5, padding: 20}}>
            <Image
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../asset/logo112.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              padding: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
              }}>
              Hai {this.state.nama}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              Welcome to Teacher Area
            </Text>
          </View>
        </View>
        {/* Bar Atas */}
        {/* Carousel */}
        <Text style={{margin: 20, fontSize: 20, fontWeight: 'bold'}}>
          Information
        </Text>
        <View style={{flex: 1, backgroundColor: '#0000'}}>
          <FlatList
            data={this.state.carouselData}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  
                  <ImageBackground
                    source={item[0]}
                    style={{
                      width: imageW,
                      height: imageH,
                      resizeMode: 'cover',
                    }}
                  ><Text style={{marginTop:-50, height:'100%',width:'100%',paddingStart:20,paddingEnd:20,fontSize:16,textAlignVertical:'center',color:'white',fontWeight:'400', textAlign:'center',margin:'auto'}}>
                    {item[1]}</Text></ImageBackground>
                </View>
              );
            }}
          />
        </View>
        {/* Carousel */}

        <Text style={{margin: 20, fontSize: 20, fontWeight: 'bold'}}>
          Action
        </Text>
        <View>
          <Card
            style={{
              margin: 20,
              padding: 20,
              color:'#065B87'
            }}>
            <Card.Title
              title="Teaching absences"
              subtitle="Fill these after teaching"
            />
            <Card.Cover source={require('../asset/card00.jpg')} />
            <Card.Actions>
              <Button onPress={() => this.props.navigation.navigate('Absensi')}>Fill</Button>
            </Card.Actions>
          </Card>
        </View>
        <View>
          <Card
            style={{
              margin: 20,
              padding: 20,
              color:'#065B87'
            }}>
            <Card.Title
              title="Apply For New Student"
              subtitle="Finding your student right now"
              style={{color:'#065B87'}}
            />
            <Card.Cover source={require('../asset/card34.jpg')} />
            <Card.Actions>
              <Button onPress={() => this.props.navigation.navigate('Apply')} >Apply</Button>
            </Card.Actions>
          </Card>
        </View>
        <View>
          <Card
            style={{
              margin: 20,
              padding: 20,
            }}>
            <Card.Title
              title="See My Student"
              subtitle="Observe Your Student"
            />
            <Card.Cover source={require('../asset/card32.jpg')} />
            <Card.Actions>
              <Button>Observe Here</Button>
            </Card.Actions>
          </Card>
        </View>
        <View>
          <Card
            style={{
              margin: 20,
              padding: 20,
            }}>
            <Card.Title
              title="Result Of My New Application"
              subtitle="See My Application From Cendikia"
            />
            <Card.Cover source={require('../asset/card33.jpg')} />
            <Card.Actions>
              <Button onPress={() => this.props.navigation.navigate('Pengumumanapply')}  >See Now </Button>
            </Card.Actions>
          </Card>
        </View>
        <View>
          <Card
            style={{
              margin: 20,
              padding: 20,
            }}>
            <Card.Title
              title="Financial"
              subtitle="See The Financial"
            />
            <Card.Cover source={require('../asset/card20.jpg')} />
            <Card.Actions>
              <Button onPress={() => this.props.navigation.navigate('Financial')} >Peep Now</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
