import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  listItem: any;
  onPress: (li: any) => any;
}

interface State {}

// <TouchableOpacity onPress={() => this.props.onPress(this.props.listItem)}
//  

export class GymListItem extends React.Component<Props, State> {
  render() {
    return (
      <TouchableOpacity 
        style={styles.listItem}
        onPress={() => this.props.onPress(this.props.listItem)}>
        <Image 
          source={this.props.listItem.images.smThumbnail || require('../../assets/images/icon.png')} 
          style={styles.thumbnail}
        ></Image>
        <Text style={styles.description}> {this.props.listItem.name} </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row"
  },
  thumbnail: {
    flex: 1,
    height: 100,
    resizeMode: "cover"
  }, 
  description: {
    flex: 3
  }
})