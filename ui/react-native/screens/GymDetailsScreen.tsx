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
} from 'react-native';
import { WebBrowser } from 'expo';
import { NavigationComponent } from 'react-navigation';

export default class GymScreen extends Component<NavigationComponent> {
  static navigationOptions = {
    header: null,
  };
  navigation = this.props.navigation;
  listItem = this.navigation.getParam('listItem', {});

  componentWillMount() {
    console.log(this.props, this.listItem);
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Button
            title={'Back to list'}
            onPress={() => this.props.navigation.navigate('GymList')}
          />
          <Image source={this.listItem.images.smThumbnail}></Image>
          <Text> {this.listItem.name } </Text>
        </View>
      </ScrollView>
      </View>
    );
	}


  _handleLearnMorePress = () => {
	WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
	);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
