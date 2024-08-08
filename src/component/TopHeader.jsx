import {Icon} from '@rneui/themed';
import {Green, Cream} from '../Color';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native'; // Assuming basic UI components
import Counter from './Counter';

const TopHeader = props => {
  return (
    <View style={[styles.Header, {backgroundColor: props.bgColor}]}>
      <View style={styles.headerLeft}>
        {props.headerLeft != '' ? (
          <Icon
            type="ionicons"
            name={props.headerLeft}
            size={24}
            color={props.iconColor != '' ? props.iconColor : Green}
            onPress={props.action}
          />
        ) : null}
      </View>
      <View style={styles.center}>
        <Text
          style={[styles.title, {textAlign: props.align, color: props.color}]}>
          {props.Header}
        </Text>
        <Text style={[styles.subtitle, {textAlign: props.align}]}>
          {props.subHeader}
        </Text>
      </View>
      <View style={styles.headerRight}>
        {props.headerRight != '' && props.headerRight != 'time' ? (
          <Icon
            type="ionicons"
            name={props.headerRight}
            size={24}
            color={props.iconColor != '' ? props.iconColor : Green}
            onPress={props.actionRight}
          />
        ) : null}
        {props.headerRight == 'time' ? (
          <Counter time={props.time} done={props.setDone} pause={props.Pause}/>
        ) : null}
      </View>
    </View>
  );
};
export default TopHeader;

const styles = StyleSheet.create({
  Header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Cream,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  headerLeft: {
    width: '10%',
    alignSelf: 'flex-start',
  },
  headerRight: {
    width: '10 %',
  },
  center: {
    width: '80%',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
  },
});
