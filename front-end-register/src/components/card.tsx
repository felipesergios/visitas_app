import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import WebcamCapture from './webcam'
  interface CardProps {
    img: string;
  }
  export default function Card_visita({img}:CardProps) {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1636311550998-c6b6f26fd58a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
             <Avatar
              size={'xl'}
              src={
                img
              }
              alt={'Author'}
              css={{
                border: '3px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'xl'} fontWeight={500} fontFamily={'arial'}>
                VISITANTE
              </Heading>
              <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                Felipe sergio sousa
              </Heading>
              <Text fontSize={'sm'} color={'gray.500'}>098.876.983-32</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                  
                <Text fontWeight={600}>09:25</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Entrada
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>10:52</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Saída
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Imprimir
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }