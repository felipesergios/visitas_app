import React,{useState,useEffect} from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  IconProps,
  Image,
  Icon,
} from '@chakra-ui/react';
import InputMask from "react-input-mask";
import Webcam from "react-webcam";
import Card_visita from './card';
import api from "../services/api"
const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  }
];

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};



export default function Form_visita({onsubmit}) {
  const webcamRef = React.useRef(null);
  const [imagem, setImage] = useState ('');
  const [nome,setNome]=useState('')
  const [cpf,setCpf]=useState('')
  const [motivo,setMotivo]=useState('')

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc)
    },
    [webcamRef]
  );


    async function register(){
    const res = await api.post('/',{nome,motivo,cpf,status:1})
    console.log(cpf)
    setNome('')
    setCpf('')
    setMotivo('')
    setImage('')
    }
 
  
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}>
           Sistema de check-in{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text">
              &
            </Text>{' '}
            Checkout <br/>{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, blue.400,pink.400)"
              bgClip="text">
              Faça seu registro agora mesmo 
            </Text>{' '}
            

                <Container>

                {imagem==''?<Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={720}
                videoConstraints={videoConstraints}
                />: <Image src={imagem}/>}

                {imagem!=''?
                <Button onClick={(e)=>
                {
                e.preventDefault();
                setImage('')
                }}>
                Capturar Novamente </Button>:<Button onClick={(e)=>{e.preventDefault();capture();}}>Capturar Foto</Button>
                }




                </Container>

           
          </Heading> 

          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
             
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Preencha os campos abaixo
             
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Observação os dados informados aqui não são compartilhados de forma externa
            </Text>
          </Stack>
          
          <Box as={'form'} mt={10} onSubmit={register}>
            <Stack spacing={4}>
              <Input
                type="text"
                placeholder="Nome completo"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                value={nome} onChange={e=>setNome(e.target.value)}
              />
              <Input 
                mask="999.999.999-99"
                placeholder="(CPF)"
                bg={'gray.100'}
                maxLength="11"
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'black.500',
                }}
                value={cpf} onChange={e=>setCpf(e.target.value)}
              />
              <Input
                placeholder="Motivo da visita"
                type="textarea"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                value={motivo} onChange={e=>setMotivo(e.target.value)}
              />
              <Input
                placeholder="Outro documento ?"
                type="textarea"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              
            </Stack>
           
            {imagem==''?  <Button
              fontFamily={'heading'}
              isDisabled={true}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Registar entrada
            </Button>: <Button
              fontFamily={'heading'}
              onClick={register}
              isDisabled={false}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl'
              }}>
              Registar entrada
            </Button>}
            
          </Box>
          
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />

{imagem==''? '': <Card_visita nome={nome} img={imagem} cpf={cpf}/>}
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};