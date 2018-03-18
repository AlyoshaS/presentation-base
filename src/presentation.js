// Import React
import React from 'react'

// Import Spectacle Core tags
import { Deck } from 'spectacle'

// Import theme
import theme from './theme'
import Slide1 from './slides/1'
import Slide2 from './slides/2'
import Slide3 from './slides/3'
import Slide4 from './slides/4'

// Require CSS
require('normalize.css')

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {Slide1}
        {Slide2}
        {Slide3}
        {Slide4}
      </Deck>
    )
  }
}
