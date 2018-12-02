import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo';

// style
import color from '../../common/assets/style/color';

interface TopHeaderViewProps {
  styles?: Object;
  title: string;
  subtitle?: string;
  buttonTitle: string;
  onPressTopButton: () => void;
}

const TopHeaderView = (props: TopHeaderViewProps) => {
  return (
    <ImageBackground
      style={[styles.imageBg, props.styles]}
      source={require('../../common/assets/images/img_bg1.jpeg')}
    >
      <LinearGradient
        style={styles.tabContainer}
        colors={['rgba(230,99,150,0.6)', 'rgba(219,137,103,0.6)']}
      >
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.topButton}
            onPress={props.onPressTopButton}
          >
            <Text style={styles.topButtonTitle}>{props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}>
            {!props.subtitle ? '' : props.subtitle}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1
  },
  buttonView: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  topButton: {
    alignItems: 'center',
    paddingVertical: 5,
    opacity: 1
  },
  topButtonTitle: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 2
  },
  // title
  titleView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: 'white',
    fontSize: 40,
    letterSpacing: 3
  },
  subTitle: {
    color: 'white',
    fontSize: 24,
    marginTop: 5,
    letterSpacing: 2
  },
  // tab
  tabContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    shadowColor: 'rgba(230,99,150,0.7)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 1.0,
    ...ifIphoneX(
      {
        paddingTop: 70
      },
      {
        paddingTop: 30
      }
    )
  }
});

export default TopHeaderView;
