import React from 'react'
import SpiderLogo2 from './spiderlogo.png'
import './Animation.css'
import { Container} from 'react-bootstrap';
import Earth from './earth2.svg'


export default function Animation() {
    return (
        <Container>
        <div className="loader ">
        <div className="loader-logo my-3">
               <img src={SpiderLogo2}  />
        </div>
    </div>
    <div className='earth'>
    <img src={Earth} />
    </div>
    </Container>
    )
  }


