import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView} from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className = "bg-white h-full">
      <ScrollView contentContainerStyle = {{height:'100%'}}>
        <View className = "w-full justify-center items-center min-h-[85vh] px-4">
          <View className = "relative mt-2 ">
            <Text className = "text-4xl text-black-100 font-bold text-justify">
            Where Memories Become  {' '}
                <Text className = "text-orange-500 font-psemibold">Timeless.</Text>
               
            </Text>

          </View>
          
          <Image 
            source={images.instacle}
            className = "max-2-[300px] w-full h-[85px]"
            resizeMode="contain"
          />

          <Image 
            source={images.cards}
            className = "max-2-[300px] w-full h-[85px]"
            resizeMode="contain"
          />


          <View className = "relative mt-5">
            <Text className="text-2xl text-white font-u_bold
            text-center">Where Memories Become Timeless</Text>

          </View>
          <Text className="text-sm, font-j_bold text-gray-100 mt-7 text-center"> Join us, Enjoy And Have Fun In Life!</Text>

          <CustomButton 
            title= "Continue with Email"
            handlePress={() => {router.push('/sign-in')}}
            containerStyle= "w-full mt-7"
            >

            </CustomButton>
          
        </View>

      </ScrollView>
      <StatusBar>backgroundColor='orange' style='light'</StatusBar>  
    </SafeAreaView>
  );
}

