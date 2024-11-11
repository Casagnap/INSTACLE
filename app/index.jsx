import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (

    <View className="flex-1 items-center justify-center bg-">
      <Text className="text-3xl font-pextralight text-blue-600/100">INSTACLE</Text>
      <Link className="text-2xl font-pextralight" href="/home">Go to Home</Link>
      
    </View>
  )
}

export default index

// const styles = StyleSheet.create({
//     container:{
//         display: 'flex',
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })
  