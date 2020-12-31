import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image,TouchableOpacity  } from 'react-native';
import { Block, Button, Text, theme,Icon, Input } from 'galio-framework';

import { materialTheme, Images } from '../../constants';
const { height, width } = Dimensions.get('screen');
export default class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={ Images.Header }
            style={{ height: '70%', width: width, zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" top style={styles.padded}>
          <Block flex space="around" center style={{ zIndex: 2 }}>
            <Text color="white" size={16}>مرحبا بك في شريك !</Text>
            <Block center>
            </Block>
          </Block>
          <Block  card flex style={[styles.form, styles.shadow]} >
            <Image
              source={Images.LogoWide}
              style={{ margin:10, height: 45, width: 200 , marginHorizontal: theme.SIZES.BASE * 3}} />
              <Block flex space="between" style={styles.formSpacing}>
                <Block flex style={styles.group}>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input 
                      left
                      placeholder="اسم المستخدم"
                      placeholderTextColor={materialTheme.COLORS.DEFAULT}
                      style={{ borderRadius: 3 ,marginBottom:5, borderColor: materialTheme.COLORS.INPUT }}
                      iconContent={<Icon size={45} color={materialTheme.COLORS.ICON} name="user" family="EvilIcons" />}
                    />
                    <Input 
                      left
                      password
                      viewPass 
                      placeholder="كلمة المرور"
                      placeholderTextColor={materialTheme.COLORS.DEFAULT}
                      style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                      iconContent={<Icon size={45} color={materialTheme.COLORS.ICON} name="lock" family="EvilIcons" />}
                    />
                  </Block>
                </Block>
                
              </Block>
              <Button
                size="small"
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => navigation.navigate('App')}>
                تسجيل الدخول
              </Button>
          </Block>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE*8 }}>
            <Block style={styles.rows}>
              <TouchableOpacity onPress={() => navigation.navigate('App')}>
                <Block row middle space="between" >
                  <Text size={14}> تخطي </Text>
                  </Block>
              </TouchableOpacity>
            </Block>
          </Block>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE*4 }}>
            <Block style={styles.rows}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Block row middle space="between" style={{ paddingTop: 15 }}>
                  <Text size={14}> ليس لديك حساب؟ سجل الآن </Text>
                  </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    top: '-35%',
  },
  button: {
    width: width - theme.SIZES.BASE * 10,
    height: theme.SIZES.BASE * 3,
    position: 'relative',
    top: '10%',
    marginHorizontal: theme.SIZES.BASE * 3,    
  },
  form: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE*3,
    borderWidth: 0,
    minHeight: 250,
    width: width - theme.SIZES.BASE * 4,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  formSpacing: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
