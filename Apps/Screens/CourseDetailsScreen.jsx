import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import CourseIntro from "../Components/CourseIntro";
import SourceSection from "../Components/SourceSection";
import EnrollmentSection from "../Components/EnrollmentSection";
import LessionSection from "../Components/LessionSection";

export default function CourseDetailsScreen() {
  const { params } = useRoute();
  const [course, setCourse] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    setCourse(params.course);
  }, [params]);
  
  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>

        <Text style={{ fontSize: 27, fontFamily: "outfit-bold" }}>
          Course Detail
        </Text>
      </View>

      {/* Course Intro */}
      <CourseIntro course={course} />

      {/* Source Section */}
      <SourceSection/>

       {/* Enroll Section */}

       <EnrollmentSection/>

       {/* Lession Section */}
       <LessionSection course={course}/>
    </ScrollView>
  );
}
