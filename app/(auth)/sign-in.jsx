import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const [isSubmitting, setisSubmitting] = useState(false)


  const submit = () => {

  }

  return (
    <SafeAreaView className = "bg-white h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[85vh] px-4 my-6">
          <Image 
            source={images.camLogo}
            resizeMode="contain"
            className = "w-[325px] h-[95px]"
          />
          <Text className = "text-2xl text-black-100 mt-5 font-psemibold">
          <View>
            <Image 
            source={images.Left}
            resizeMode="contain"
            className = "w-[40x] h-[50px]"
          />
          </View>
            <Text className = "text-orange-500">INSTACLE</Text>
          </Text>

          <FormField 
          title = "Email"
          value = {form.email}
          handleChangeText = {(e) => setform({...form, email: e})}
          otherStyles = "mt-7"
          keyboardType = "email-address"
          />

          <FormField 
          title = "Password"
          value = {form.password}
          handleChangeText = {(e) => setform({...form, password: e})}
          otherStyles = "mt-7"
          />

          <CustomButton 
            title = "Sign In"
            handlePress = {submit}
            containerStyle = "mt-7"
            isLoading = {isSubmitting}
          />

          <View className = "justify-center pt-5 flex-row gap-2">
              <Text className = "text-lg text-gray-800 font-pregular">
                Don't have account ?
              </Text>
              <Link href="/sign-up" 
                  className= "text-lg font-semibold text-secondary-600">Sign Up</Link>
                  <Link href="/home" 
                  className= "text-lg font-semibold text-secondary-600">Home</Link>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn