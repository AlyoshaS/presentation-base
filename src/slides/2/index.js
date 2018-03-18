// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Image
} from 'spectacle'
import img1 from './img1.png'

export default (
  <Slide transition={['fade']} bgColor='tertiary'>
    <Heading padding='0 0 20px' size={5} textColor='primary' caps>
      Mais de <u>60%</u> do tempo de trabalho <u>não</u> é produtivo
    </Heading>
    <Image src={img1} margin='0 0 40px' alt='Noticia Veja' />
  </Slide>
)
