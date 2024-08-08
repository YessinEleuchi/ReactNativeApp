import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopHeader from '../component/TopHeader';
import {DarkGreen, White,Yellow,Green, Gray, DarkGray} from '../Color';
import { ListItem } from '@rneui/base';
const MyModal = props => {

  const toggleModal = (a) => {
    props.toggle();
    props.setWord(a);
  }
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={props.isVisible}>
        <View style={styles.main}>
          <View style={{height: StatusBar.currentHeight}}></View>
          <SafeAreaView style={{flex: 1}}>
            <TopHeader
              color={White}
              iconColor={White}
              headerRight="close"
              align="center"
              actionRight={props.toggle}
            />
            {props.words.map((item, index) => {
              return (
                <ListItem
                  bottomDivider
                  key={index}
                  onPress={() => toggleModal(props.lang === 0 ? item.french : item.english)}
                  containerStyle={[
                    {paddingVertical: 15,backgroundColor:DarkGreen},
                  ]}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.title}>
                      {props.lang === 0 ? item.french : item.english}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>
                      {props.lang === 0 ? item.english : item.french}
                    </ListItem.Subtitle >
                  </ListItem.Content>
                </ListItem>
              );
            })}
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: DarkGreen,
  },
  list: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: White,
  },
  subtitle: {
    color: DarkGray,

  },
});
