import { View, Text, Image, TextInput,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../Utils/KindConfig';
import Colors from '../Utils/Colors';
import { Ionicons } from "@expo/vector-icons"; // Импорт иконок Ionicons

export default function Header() {

  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    getUserDetails(); // Вызов функции для получения данных о пользователе
  }, []);

  const getUserDetails = async () => {
    const user = await client.getUserDetails(); // Получение данных о пользователе с помощью клиента
    setUserDetail(user); // Обновление состояния с данными о пользователе
  };
  return (
      <>
      <View style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}>
        <Image
          source={{ uri: userDetail?.picture}} // Источник изображения - аватар пользователя
          style={{ width: 45, height: 45, borderRadius: 99 }} // Стили для изображения
          />
        <View>
        <Text style={{ fontSize: 18, fontFamily: "outfit" }}>
            Добро Пожаловать!
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: Colors.PRIMARY,
              fontFamily: "outfit-bold",
            }}
          >
            {" "}
            в iMed {userDetail?.given_name}
          </Text>
        </View>
    </View>

    <View style={styles.input}>
        <Ionicons name="search" size={24} color={Colors.GRAY} />
        <TextInput placeholder="Найти" style={{ fontFamily: "outfit", width: "100%" }}/>
      </View>
    </>
    
  )
}

// Стили для компонента
const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.WHITE, // Цвет фона поля ввода
    padding: 10, // Внутренний отступ
    borderRadius: 99, // Радиус скругления углов
    paddingHorizontal: 20, // Горизонтальный внутренний отступ
    marginTop: 20, // Верхний отступ
    display: "flex", // Отображение как блочный элемент
    flexDirection: "row", // Направление расположения элементов - горизонтальное
    gap: 7, // Промежуток между элементами
    alignItems: "center", // Выравнивание по центру
    borderWidth: 0.4, // Ширина границы
    borderColor: Colors.PRIMARY, // Цвет границы
  },
});
