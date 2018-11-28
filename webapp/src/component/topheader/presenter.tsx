import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
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

// view
import Todo from '../../screen/todo';
import Timeline from '../../screen/timeline';

interface TopHeaderViewProps {
  styles?: Object;
  title: string;
  subtitle: string;
  // onChangeTab: (event) => void;
}

const TopHeaderView = (props: TopHeaderViewProps) => {
  return (
    <ImageBackground
      style={[styles.imageBg, props.styles]}
      source={require('../../common/assets/images/img_bg1.jpeg')}
    >
      <LinearGradient
        style={styles.tabContainer}
        colors={['rgba(230,99,150,0.8)', 'rgba(219,137,103,0.8)']}
      >
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.topButtonTitle}>{'Timeline'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}>{props.subtitle}</Text>
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
    width: '35%',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: color.mild_green,
    opacity: 1
  },
  topButtonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
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
