import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import SectionHeading from './SectionHeading'

export default function CourseIntro({ course }) {
  return course&& (
    <View style={{backgroundColor:Colors.WHITE,padding:15,borderRadius:10}}>
      <Video
      shouldPlay={true}
        style={styles.video}
        source={{
          uri: course?.chapter[0]?.video?.url,
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      
      />
      <View style={{display:'flex',gap:10}}>
        <Text style={{fontSize:22,fontFamily:'outfit-bold',marginTop:20}}>{course.name}</Text>
        <Text style={{ fontSize: 14, fontFamily: "outfit", color: Colors.GRAY }}>
{course.author}
        </Text>
      </View>

      <View style={{display: "flex",flexDirection: "row",justifyContent: "space-between",alignItems: "center",
        }}>
        {course?.chapter?.length ? (
          <View style={{display: "flex",flexDirection: "row",gap: 4,alignItems: "center", }}>
            <Ionicons name="book" size={20} color={Colors.PRIMARY} />
            <Text style={{ color: Colors.GRAY, fontFamily: "outfit" }}>
              {course?.chapter?.length} Глава
            </Text>
          </View>
        ) : (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Ionicons name="logo-youtube" size={20} color={"red"} />
            <Text style={{ color: Colors.GRAY, fontFamily: "outfit" }}>
              YouTube
            </Text>
          </View>
        )}
        <Text style={{ fontFamily: "outfit-bold", color: Colors.PRIMARY }}>
          {course.free ? "Бесплатно" : "Платный"}
        </Text>
        
      </View>
      <SectionHeading heading={'Описание'}/>
      <Text numberOfLines={5} style={{marginTop:-8,fontFamily:'outfit'}}>{course?.description}</Text>
    </View>

    
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height:250
  }
  
});
