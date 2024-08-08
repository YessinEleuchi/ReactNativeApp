import React from 'react'
import { Icon, ListItem } from '@rneui/themed';
import {Gray , Cream,Green,Yellow} from '../Color'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';
import { WordFav, checkFav } from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';


//api : word id /French word / English word / favourite/ state





const LearnItems = (props) => {
  const list=props.words;

const Items =(props) =>{
  const [checked, setChecked] = React.useState(false);

  const Fav = async () => {
    const token = await AsyncStorage.getItem('token');
    checkFav({id:props.item.id,token:token}).then((result)=>{
     setChecked(result.data.is_favorite) 
    })
  }
  Fav()
  const favourite = async () => {
    const token = await AsyncStorage.getItem('token');
    setChecked(!checked)
    WordFav({id:props.item.id,token:token,fav:checked}).then((result)=>{
      console.log(result.data)
    }
    )
  }
return (
  <ListItem bottomDivider key={props.index} containerStyle={[{backgroundColor:Cream,paddingVertical:15}]}>
          <ListItem.CheckBox
             iconType="ionicons"
             checkedIcon="star"
             uncheckedIcon="star-outline"
             checked={checked}
             checkedColor={Green}
             containerStyle={{backgroundColor:null}}
             onPress={() => favourite()}
           />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{props.item.french}</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>{props.item.english}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon
            type="ionicon" 
            name={
              props.item.state==2?'checkmark-circle-outline':
              props.item.state==1?'time-outline':
              null} 
            color={
              props.item.state==2?Green:
              props.item.state==1?Yellow:
              null} 
            />
        </ListItem>
)}
return (
      <>
      {list.map((item,index)=>(
        <Items key={index} item={item}/>
        ))}
        </>
  ) 
}

export default LearnItems

const styles = StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight:'regular',
    marginBottom:10
  },
  subtitle:{
    fontSize:14,
    fontWeight:'light',
    color:'grey',
  }
})