import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Modal} from 'react-native';
import React from 'react';
import {BackgroundImage} from '@rneui/base';
import TopHeader from '../../component/TopHeader';
import {Black, Cream, DarkGray, Gray, Green, Tomato, White} from '../../Color';
import {Input,Icon} from '@rneui/themed';
import BottomButton from '../../component/BottomButton';
import { useTranslation } from 'react-i18next';
import CreateHead from '../../component/CreateHead';

const bg = require('../../assets/bg/bglight.png');
const fr = require('../../assets/icons/ic_fr.png');
const eng = require('../../assets/icons/ic_gb.png');

const CreateElements = ({navigation},props) => {
    const {t} = useTranslation();
    const [french, setFrench] = useState('');
    const [english, setEnglish] = useState('');
    const [words, setWords] = useState([]);
    const addword = () => {
        setWords([...words, {french: french, english: english}]);
        setFrench('');
        setEnglish('');
    }
  return (
    <Modal animationType="slide" transparent={true} visible={props.isVisible}>
    <View style={styles.main}>
      <SafeAreaView>
        <BackgroundImage source={bg} style={styles.bg}>
          <TopHeader
            Header={t('add_an_element')}
            headerLeft="arrow-back"
            iconColor={Tomato}
            align="center"
            bgColor={Cream}
            action={props.toggle}  
            />
          <CreateHead title='Test' count={words.length} type='gram'/>
          <View style={{backgroundColor: Cream}}>
            <Input
              placeholder="Bonjour Brian !!!"
              value={french}
              onChangeText={setFrench}
              label={t('fra')}
              labelStyle={{fontSize: 14, fontWeight: '500', color: Black,}}
              leftIcon={
                <Image source={fr} style={styles.icon}/>
            }
              inputStyle={styles.input}
              inputContainerStyle={{borderColor: Cream}}
              containerStyle={{
                marginTop: 20,

              }}
            /><Input
            placeholder="Hello Brian !!!"
            label={t('eng')}
            value={english}
            onChangeText={setEnglish}
            labelStyle={{fontSize: 14, fontWeight: '500', color: Black,}}
            leftIcon={
                <Image source={eng} style={styles.icon}/>
            }
            inputStyle={styles.input}
            inputContainerStyle={{ borderColor: Cream}}
            containerStyle={{
              borderColor: Gray,
              borderBottomWidth: 1,
            }}
          />
      
            </View>
            <BottomButton type='create' action={() => navigation.navigate('Home') }/>
        </BackgroundImage>
      </SafeAreaView>
    </View>
    </Modal>
  );
};

export default CreateElements;

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    backgroundColor: Cream
},
  bg: {
    height: '100%',
    width: '100%',
  },
  icon:{
    height:72/2.5,
    width:108/2.5,
},
  btn:{
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    color: Black,
    marginLeft: 10,
    marginVertical: 10,
    paddingVertical: 10,
    width: '85%',
  },
  input: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: White,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Gray,
    marginHorizontal: 10,
  },
});
