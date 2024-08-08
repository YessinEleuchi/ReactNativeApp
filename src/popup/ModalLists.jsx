import React, { useState } from 'react';
import { Modal, View, Button, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Cream, DarkGreen, White } from '../Color';
import { BackgroundImage } from '@rneui/base';
import TopHeader from '../component/TopHeader';
import { useTranslation } from 'react-i18next';
import ModalItem from '../component/ModalItem';
import Separtor from '../component/Separtor';

const bg = require('../assets/bg/background.png')

const MyModal = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={props.isVisible}>
        <StatusBar barStyle='light-content'/>
        <View style={styles.main}>
          <SafeAreaView>
          <TopHeader Header={t("info")} headerLeft='close' action={props.toggle} color={White} iconColor={White} align='center'/>
          <ModalItem icon='fill' type='Verified'/>
          <Separtor/>
          <ModalItem icon='fill' type='Modified'/>
          <Separtor/>
          <ModalItem type='User'/>
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
    backgroundColor: DarkGreen
  },
  container: {
    flex: 1,
  },
  
})