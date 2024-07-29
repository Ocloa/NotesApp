import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import {LoginForm} from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const AuthScreen = () => {

const [loginVisible, setLoginVisible] = useState(true)
  return (
    <RegisterForm/>

  )
}


export default AuthScreen