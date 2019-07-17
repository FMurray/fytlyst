import React, { Component } from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
  Button,
  SectionList
} from 'react-native';
import { NavigationComponent } from 'react-navigation';
import { GymListItem } from '../components/gym/GymListItem';
import { FlatList } from 'react-native-gesture-handler';

const mockListData = [
  { 
    title: `Gold's Gym`,
    data: {
      name: `Gold's Gym`,
      images: { smThumbnail: require('../assets/images/golds-gym.png')}
    }
  },
  { 
    title: `Onelife Fitness`,
    data: {
      name: `Onelife Fitness`,
      images: { smThumbnail: require('../assets/images/onelife-header-logo.png')} 
    }
  },
  { 
    title: `Locals Only Gym`,
    data: {
      name: `Locals Only Gym`,
      images: { smThumbnail: require('../assets/images/locals-only-gym.jpg')}
    }
  },
];


export default class GymListScreen extends Component<NavigationComponent> {
  static navigationOptions = {
    header: null,
  };

  private _handleLIPress(li: any) {
    console.log('li: ', li);
    this.props.navigation.navigate('GymDetails', { listItem: li });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/barbell.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <FlatList 
          renderItem={({item}) => 
            <GymListItem 
              onPress={(li: any) => this._handleLIPress(li)}
              listItem={item.data}
              key={item.title}
            ></GymListItem>
          }
          data={mockListData}
          style={styles.listContainer}
        ></FlatList>
      </View>
    );
	}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'column', // main axis
    justifyContent: 'center', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#47a8b5'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  listContainer: {
    marginTop: 14,
    alignSelf: "stretch"
  },
});
