import React,{useState} from "react";
import {Button,Image,Container} from '@chakra-ui/react'
import Webcam from "react-webcam";
import Card_visita from "./card";
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imagem, setImage] = useState ('');
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
      },
      [webcamRef]
    );
    
    
    
    
  
    return (
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


<Card_visita img={imagem}/>
       

      </Container>
    );
  };
  export default WebcamCapture