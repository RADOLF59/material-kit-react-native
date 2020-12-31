import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback ,View} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Icon from './Icon';
import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class SupplierBox extends React.Component {
  render() {
    const { navigation, supplier, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={true} card flex style={[styles.supplier, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Teacher', { supplier: supplier })}>
        <Block flex style={[styles.PriceContainer, styles.shadow]}>
            <Text size={10} muted={!priceColor} style={styles.price} color={priceColor}>ريال {supplier.price}</Text>
            <Icon name="clock" family="mdi" size={14} />
            <Text size={12} muted={!priceColor} color={priceColor}>ساعة</Text>
            <Text size={12} style={styles.book}>احجز</Text>
            <Text size={12} style={styles.more}>المزيد</Text>
        </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Teacher', { supplier: supplier })}>
          <Block flex-end style={[styles.imageContainer, styles.shadow]}>
              <Text style={styles.stars}>
              <Icon name="shape-star" family="GalioExtra" size={14} />
              <Icon name="shape-star" family="GalioExtra" size={14} />
              <Icon name="shape-star" family="GalioExtra" size={14} />
              <Icon name="shape-star" family="GalioExtra" size={14} />
              <Icon name="shape-star" family="GalioExtra" size={14} />
              </Text>
            <Image source={{ uri: supplier.image }} style={imageStyles} />
            <Text size={14} style={styles.supplierTitle}>{supplier.title}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(SupplierBox);

const styles = StyleSheet.create({
  supplier: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  supplierTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    textAlign:"center",
  },
  supplierDescription: {
    padding: theme.SIZES.BASE / 2,
    width:"100%",
  },
  imageContainer: {
    width:"70%",
  },
  PriceContainer:{
    textAlign:"center",
    marginTop:25,
    marginLeft:2,
    width:"30%",
    elevation: 1,
  },
  image: {
    height: 122,
    width: 122,
    borderRadius: 3,
    borderColor: materialTheme.COLORS.INFO,
    borderWidth:2,
    marginHorizontal: theme.SIZES.BASE / 2,
  },
  stars: {
    textAlign:"right",
    padding:3,
    color:materialTheme.COLORS.WARNING,
  },
  price:{
    borderWidth:1,
    borderColor:materialTheme.COLORS.MUTED,
    padding:1,
  },
  book:{
    width:"100%",
    textAlign:"center",
    backgroundColor:materialTheme.COLORS.WARNING,
    color:theme.COLORS.WHITE,
    position:"absolute",
    bottom:20
  },
  more:{
    width:"100%",
    textAlign:"center",
    backgroundColor:materialTheme.COLORS.MUTED,
    color:theme.COLORS.WHITE,
    position:"absolute",
    bottom:0
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});