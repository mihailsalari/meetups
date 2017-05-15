'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet 
} from 'react-native';

import Spinner from 'react-native-spinkit';
import Common from '../../Resources/Common';

/**
 * Full dimension spinner view
 */
export default class FullSpinner extends Component {
  
  constructor(props) {
    super(props);
  }

  /**
   * All cross-platform spinner types
   * @returns {Object}
   * @constructor
   */
  static get Types() {
    return {
      CircleFlip: 'CircleFlip',
      Bounce: 'Bounce',
      Wave: 'Wave',
      WanderingCubes: 'WanderingCubes',
      Pulse: 'Pulse',
      ChasingDots: 'ChasingDots',
      ThreeBounce: 'ThreeBounce',
      Circle: 'Circle',
      CubeGrid: '9CubeGrid',
      FadingCircle: 'FadingCircle',
      FadingCircleAlt: 'FadingCircleAlt',
    };
  }

  render() {
    
    let spinnerSize = this.props.size;
    let generalColor = Common.Colors.blue;
    
    let textView = null;
    if (this.props.title || this.props.showLoadingTitle) {
      textView = (
        <Text
          style={[styles.titleText, {color: generalColor}]}
        >
          {this.props.showLoadingTitle ? 'Loading..' : this.props.title}
        </Text>
      );
    }
    
    if (this.props.isVisible === true) {
      return(
        <View
          style={[Common.Styles.fullDimensions, styles.rootView, {
            backgroundColor: this.props.isTransparent ? 'transparent' 
            : Common.Colors.grey900
          }, this.props.style]}
        >
          <View
            style={[styles.mainContainer]}
          >
            <Spinner
              style={[styles.spinner, {width: spinnerSize, height: spinnerSize}]}
              size={spinnerSize}
              type={this.props.type}
              color={generalColor}
            />
            {textView}
          </View>
        </View>
      );
    }
    else {
      return null;
    }
  }
}

FullSpinner.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
  isTransparent: React.PropTypes.bool,
  showLoadingTitle: React.PropTypes.bool,
  type: React.PropTypes.string,
  title: React.PropTypes.string,
  size: React.PropTypes.number,
};

FullSpinner.defaultProps = {
  isVisible: true,
  isTransparent: true,
  showLoadingTitle: true,
  type: '9CubeGrid',
  size: 70,
};

const styles = StyleSheet.create({
  
  rootView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  
  mainContainer: {
    padding: 25,
  },
  
  spinner: {
    alignSelf: 'center',
  },
  
  titleText: {
    marginTop: 30,
    fontFamily: Common.Fonts.ExpletusSans_Bold,
    fontSize: 30,
    textAlign: 'center',
  },
});

