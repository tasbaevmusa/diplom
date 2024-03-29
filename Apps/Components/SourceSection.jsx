import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function SourceSection() {
  return (
    <View style={{display:'flex',flexDirection:'row',gap:10,justifyContent: 'space-evenly',marginTop:20,marginBottom:10}}>
      <View style={{padding:15,backgroundColor:Colors.WHITE,
      alignItems:'center',borderRadius:10,width:120,borderWidth:0.4}}>
        <Image source={require('./../../assets/images/open-source.png')}
            style={{width:40,height:40}}
        />
        <Text style={{fontSize:14,fontFamily:'outfit'}}>Источник</Text>
      </View>

      <View style={{padding:15,backgroundColor:Colors.WHITE,alignItems:'center',borderRadius:10,width:120,borderWidth:0.4}}>
        <Image source={require('./../../assets/images/web-design.png')}
            style={{width:40,height:40}}
        />
        <Text style={{fontSize:14,fontFamily:'outfit'}}>Демо</Text>
      </View>

      <View style={{padding:15,backgroundColor:Colors.WHITE,alignItems:'center',borderRadius:10,width:120,borderWidth:0.4}}>
        <Image source={require('./../../assets/images/youtube.png')}
            style={{width:40,height:40}}
        />
        <Text style={{fontSize:14,fontFamily:'outfit'}}>YouTube</Text>
      </View>
    </View>
  )
}