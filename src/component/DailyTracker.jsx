import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import {LineChart, PieChart} from 'react-native-chart-kit'
import { Black, Blue, Cream, Gray, Green, Orange, Tomato } from '../Color'
import { useTranslation } from 'react-i18next';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


//Api :



const DailyTracker = (props) => {
    const { t } = useTranslation();
    const days =props.data.total_practice_duration_last_7_days;
    const total =props.data.total_practice_duration
    const average =props.data.average_practice_duration
    const practiceType =props.data.count_practice_by_listing_type
    const data = [
        {
          name: t("vocab"),
          percentage: practiceType[0],
          color: Tomato,
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: t("grammar"),
          percentage: practiceType[1],
          color: Orange,
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: t("expression"),
          percentage: practiceType[2],
          color: Blue,
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
      ];

const opacity = useSharedValue(0);
const landing = () => {
  opacity.value = withSpring(1, {
    duration: 1000
  })
}
useEffect(() => {
  landing()
},[props.data])
  return (
    <Animated.View style={[styles.main,{opacity:opacity}]}>
        <View style={styles.container}>
        <Text style={styles.title}>{t("averageperday")}</Text>
        <Text style={styles.number}>{average==0?0+' Mins':average<60?'>1 Mins':average>60&&average<3600?(Math.trunc(average/60))+' Mins':average>3600?(Math.trunc(average/3600))+' Hrs'+Math.trunc((average%3600)/60)+ ' Mins':undefined} </Text> 
        </View>
        <LineChart 
        data={{
            labels: [t("monday"), t("tuesday"), t("wednesday"), t("thursday"), t("friday"), t("saturday"), t("sunday")],
            datasets: [
              {
                data: [
                  days["day-1"]/60,
                  days["day-2"]/60,
                  days["day-3"]/60,
                  days["day-4"]/60,
                  days["day-5"]/60,
                  days["day-6"]/60,
                  days["day-7"]/60,
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width+20} // from react-native
          height={Dimensions.get("window").height/5}
          fromZero={true}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: Gray,
            backgroundGradientFrom: Cream,
            backgroundGradientTo: Cream,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(50, 100, 50, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: Green
            },
          }}
          bezier
    
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text style={styles.legend}>{t("timeperday")}</Text>
        <View style={styles.container}>
        <Text style={styles.title}>{t("totalPractice")}</Text>
        <Text style={styles.number}>{total==0?0+' Mins':total<60?'>1 Mins':total>60&&total<3600?(Math.trunc(total/60))+' Mins':total>3600?(Math.trunc(total/3600))+' Hrs '+Math.trunc((total%3600)/60)+ ' Mins':undefined}</Text> 
        </View>
        <PieChart        
        data={data}
        width={Dimensions.get("window").width}
        chartConfig={{

            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },


          }}
        height={Dimensions.get("window").height/5}
         accessor={"percentage"}
        backgroundColor={"transparent"}
        paddingLeft={"-5"}
        center={[0, 0]}
/>
        <Text style={styles.legend}>{t("practiceSlice")}</Text>
      </Animated.View>
  )
}

export default DailyTracker

const styles = StyleSheet.create({
main:{
  alignItems:'center',
  width:'100%',
  height:'100%'
},
container:{
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  width:'90%',
  paddingVertical:10,
  marginBottom:20,
  borderBottomColor:Gray,
  borderBottomWidth:2,
},
legend:{
  fontSize:12,
  fontWeight:'400',
  color:Green,
  marginTop:10,
  marginBottom:30
},
title:{
  fontSize:16,
  fontWeight:'500',
  color:Black
},
number:{
  fontSize:14,
  fontWeight:'500',
  color:Green
}
})