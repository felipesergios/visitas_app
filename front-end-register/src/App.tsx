import React,{useState} from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Form_visita from './components/Form'
import Card_visita from "./components/card"

//import WebcamCapture from './components/webcam'


export default function App(){
  
  return(
    <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
   
    <Form_visita/>
    <ColorModeSwitcher justifySelf="flex" />
    </Box>
  </ChakraProvider>
  )
}

