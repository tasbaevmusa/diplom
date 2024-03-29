import React, { createContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Navigations/TabNavigation';
import LoginScreen from './Apps/Screens/LoginScreen';
import { client } from './Apps/Utils/KindConfig';
import { useFonts } from "expo-font";
import HomeNavigation from './Apps/Navigations/HomeNavigation';

export const AuthContext = createContext();

export default function App() {
    const [auth, setAuth] = useState(false);
    const [fontsLoaded, fontError] = useFonts({
        outfit: require("./assets/fonts/Outfit-Regular.ttf"),
        "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
        "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    });

    useEffect(() => {
        checkAuthenticate();
    }, []);

    const checkAuthenticate = async () => {
      try {
          const isAuthenticated = await client.isAuthenticated();
          if (isAuthenticated) {
              const userProfile = await client.getUserDetails();
              setAuth(true);
          } else {
              setAuth(false);
          }
      } catch (error) {
          console.error("ERROR Something wrong when trying to authenticate. Reason:", error);
          setAuth(false); // Устанавливаем auth в false в случае ошибки
      }
  };
    return (
        <View style={styles.container}>
            <AuthContext.Provider value={{ auth, setAuth }}>
                <NavigationContainer>
                    {auth ? <HomeNavigation /> : <LoginScreen />}
                </NavigationContainer>
            </AuthContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
