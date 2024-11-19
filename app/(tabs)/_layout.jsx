import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className = "items-center justify-center gap-2">
      <Image 
      source={icon}
      resizeMode= "contain"
      tintColor={color}
      className = "w-7 h-7"
      />
      <Text className = {`${focused ? 'font-semibold' : 'font-pregular'} text-xs`} style = {{color:color}}>{name}</Text>
    </View>
  )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#079604',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#0085FF',
          height: 70,
        }
      }}>
       

        <Tabs.Screen 
        name= "home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon = {icons.home}
              color = {color}
              name = "Home"
              focused = {focused}
            />
          )
        }}
        />

                  
          <Tabs.Screen 
                  name= "search"
                  options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                      <TabIcon 
                        icon = {icons.search}
                        color = {color}
                        name = "Search"
                        focused = {focused}
                      />
                    )
                  }}
                  />

                <Tabs.Screen 
                name= "plus"
                options={{
                  title: 'Plus',
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                    <TabIcon 
                      icon = {icons.plus}
                      color = {color}
                      name = "Plus"
                      focused = {focused}
                    />
                  )
                }}
                />

                <Tabs.Screen 
                  name= "films"
                  options={{
                    title: 'Films',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                      <TabIcon 
                        icon = {icons.films}
                        color = {color}
                        name = "Films"
                        focused = {focused}
                      />
                    )
                  }}
                  />

<Tabs.Screen 
                  name= "profile"
                  options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                      <TabIcon 
                        icon = {icons.profile}
                        color = {color}
                        name = "Profile"
                        focused = {focused}
                      />
                    )
                  }}
                  />


      </Tabs>
    </>
  )
}

export default TabsLayout