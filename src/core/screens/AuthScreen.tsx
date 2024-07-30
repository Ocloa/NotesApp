import { View, Text, Button, Pressable, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import {LoginForm} from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'
import React, { useState, useEffect } from 'react'
import Animated, {Easing} from 'react-native-reanimated'
import { useSharedValue, useAnimatedStyle, withTiming, } from 'react-native-reanimated'

const AuthScreen = () => {

const [isLogin, setIsLogin] = useState(true);
const width = Dimensions.get('window');

const translateX = useSharedValue(0);

useEffect(() => { 
  translateX.value = withTiming(isLogin ? 0 : -width, { duration: 500, easing: Easing.inOut(Easing.ease), });
 }, [isLogin]);

const toggleForm = () => {
  setIsLogin(!isLogin)
}

const animatedStyle = useAnimatedStyle(()=>{
  return {
    transform: [{translateX: translateX.value}]
  }
})

  return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F8F9' }}>
        <LinearGradient colors={['#F1F8F1', '#F1F8F9']} start={{x: 0, y:0.5}} style={{flex:0.5, borderRadius: 10}}>
        <View style={{ borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 10, flex:1, flexDirection: 'column', width: 300, justifyContent: 'center', alignItems:'center', gap:15, backgroundColor:'rgba(255, 241, 243, 0.5)'}}>
      {isLogin? (
      <LoginForm/>
    ) : (
      <RegisterForm/>
    )
    }
    {isLogin? (
        <>
        <Text>Нет аккаунта?</Text>
        <Text onPress={toggleForm} style={{color: '#304F5F'}}>Зарегистрироваться</Text>
        </>
      ): (
        <>
        <Text>Уже есть аккаунт?</Text>
        <Text onPress={toggleForm} style={{color: '#304F5F'}}>Войти</Text>
        </>
      )}
    </View>
    </LinearGradient>
      </View>

  )
}


export default AuthScreen