import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyCourseScreen from "../Screens/MyCourseScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import NewsScreen from "../Screens/NewsScreen"; // Импортируем новый экран для новостей
import Colors from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Главная"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Главная</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Мои Курсы"
        component={MyCourseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Мои курсы</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Новости" // Название новой вкладки
        component={NewsScreen} // Компонент для новостей
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={24} color={color} /> // Иконка для новостей
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Новости</Text> // Название вкладки
          ),
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Профиль</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
