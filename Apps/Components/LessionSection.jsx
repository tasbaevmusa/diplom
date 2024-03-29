import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import SectionHeading from './SectionHeading'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

export default function LessionSection({course}) {
  const [isEnrolled,setIsEnrolled] = useState(false)
  return (
    <View>
    <SectionHeading heading={'Lessions'}/>
      <FlatList
      data={course?.chapter}
      renderItem={({item,index})=>(
        <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems: 'center',padding:15,borderWidth:0.5,marginBottom:10,borderRadius:10}}>
        <View style={{display:'flex',flexDirection:'row',gap:10,alignItems: 'center'}}>
        <Text style={{
          fontSize:17,
          fontFamily:'outfit',
          padding:10,
          backgroundColor:Colors.PRIMARY_LIGHT,
          borderRadius:99,
          width:40,
          height:40,
          textAlign: 'center',
          color:Colors.PRIMARY
        }}>{index+1}</Text>


        <Text style={{fontFamily:'outfit-medium',fontSize:14}}>{item.name}</Text>
        </View>
          {isEnrolled|| index==0?  <Ionicons name="play" size={24} color={Colors.PRIMARY} />
          : <Ionicons name="lock-closed" size={24} color={Colors.GRAY} />}
        </TouchableOpacity>

      )}

        
      />
      <View style={{height:50}}>

      </View>
    </View>
  )
}