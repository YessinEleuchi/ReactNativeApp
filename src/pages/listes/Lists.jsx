import {
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Black, Cream, Green} from '../../Color';
import TopHeader from '../../component/TopHeader';
import HeaderMenu from '../../component/HeaderMenu';
import {BackgroundImage} from '@rneui/base';
import BottomButton from '../../component/BottomButton';
import {useTranslation} from 'react-i18next';
import MyModal from '../../popup/ModalLists';
import Content from '../../component/Content';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getList } from '../../api/func';
import AddLists from './ContentUser';
import Toast from 'react-native-toast-message';


const bg = require('../../assets/bg/bglight.png');

const Lists = props => {
  const {t} = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => setIsVisible(!isVisible);

  //Api List call
  const [render, setRender] = useState(0);
  const [vocab, setVocab] = useState([]);
  const [gram, setGram] = useState([]);
  const [exp, setExp] = useState([]);
  const [empty, setEmpty] = useState(false);
  
  const apiLoad = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const data = await getList(token,'lists').then((result)=>{
        setVocab(result.vocab)
        setGram(result.gram)
        setExp(result.exp)
        setRender(1)
      });
  }
   catch (error) {
    return error
  }}
  useEffect(() => {
    apiLoad()
  },[render]);
  ////------Api List call
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Next version',
      text2: 'Not Yet 👋'
    });
  };


  return (
    <View style={{flex: 1, backgroundColor: Cream}}>
      <MyModal toggle={toggleModal} isVisible={isVisible} />
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: StatusBar.currentHeight}}></View>
        <StatusBar barStyle="dark-content" backgroundColor={Cream} />
        <TopHeader
          Header={t('my_lists')}
          headerLeft="info-outline"
          align="center"
          color={Black}
          iconColor={Green}
          action={toggleModal}
        />
        <BackgroundImage source={bg} style={{height: '100%'}}>
          <HeaderMenu />
          <ScrollView>
            <AddLists navigation={props.navigation} props={props} />
            <Content navigation={props} page="lists" vocab={vocab} gram={gram} exp={exp} empty={setEmpty}/>
          </ScrollView>
        </BackgroundImage>
        <BottomButton type="random" empty={empty} action={showToast} />
      </SafeAreaView>
    </View>
  );
};
export default Lists;
