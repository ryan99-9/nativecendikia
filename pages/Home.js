import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  Image,
  FlatList,
  View,
  Dimensions,
  StatusBar,
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
        // '../asset:/dummy_carousel1.jpg',
        // '../aasset:/dummy_carousel2.jpg',
        // '../asset:/dummy_carousel3.jpg'
        'https://www.thecompleteuniversityguide.co.uk/commimg-cug/myhotcourses/blog/rich/myhc_81263.jpg',
        'https://online.essex.ac.uk/wp-content/uploads/2016/06/OldBlog_16_FB.png',
        'https://www.managementstudyhq.com/wp-content/uploads/2020/05/Study-Marketing.jpg',
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
                <View style={{justifyContent: 'center', alignItems: 'center',padding:10}}>
                  <Image
                    source={{uri: item}}
                    style={{
                      width: imageW,
                      height: imageH,
                      resizeMode: 'cover',
                    }}
                  />
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
            }}>
            <Card.Title
              title="Apply For New Student"
              subtitle="Finding your student right now"
            />
            {/* <Card.Cover source={require('../asset/dummy_carousel1.jpg')} /> */}
            <Card.Actions>
              <Button>Apply</Button>
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
            {/* <Card.Cover source={require('../asset/dummy_carousel1.jpg')} /> */}
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
            {/* <Card.Cover source={require('../asset/dummy_carousel1.jpg')} /> */}
            <Card.Actions>
              <Button>See Now </Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
