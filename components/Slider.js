import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { SliderBox } from "react-native-image-slider-box";
export default class Slider extends React.Component {
    state = {
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
           ]
    }
  
    render() {
      const { style, ...props } = this.props;
      return (
        <SliderBox images={this.state.images} />
      )
    }
  }
  
  const styles = StyleSheet.create({
   
  });
  