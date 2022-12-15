import React from 'react';
import { Paper } from '@material-ui/core';
// import { Android, Code, Language, SelectAll, CheckBox, Flag } from '@material-ui/icons';
import './Toolbar.css';
import HardwareIcon from '../assets/HardwareIcon.svg';
import SoftwareIcon from '../assets/SoftwareIcon.svg';
import SelectAllRoundedIcon from "@material-ui/icons/SelectAllRounded"

export default function Toolbar(props) {
  let setDomain = props.setDomain;
  let domain = props.domain;
  const handleOnClick = (index) => {
    if(index === -1){
        setDomain([true,true]);
        return;
    }
    // setDomain([false,false,false,false]);
    let newDomain = [];
    // domain = [];
    for (let i = 0; i < 2; i++) {
      if (i === index) {
        // if (domain[i] === true) newDomain.push(false);
         newDomain.push(true);
      } else {
        newDomain.push(false);
      }
    }
    setDomain(newDomain);
    // console.log(domain);
  };
  return (
    <div className="domain-toolbar">
    <Paper
        onClick={(e) => {
          e.preventDefault();
          handleOnClick(-1);
        }}
        className={'domain-box' + ((domain[0] === true && domain[1] === true) ? ' domain-box-clicked' : '')}
        variant="outlined"
        elevation={5}
      >
        <SelectAllRoundedIcon className="domain-image" fontSize='large' style={{fill:'white',  marginTop:'-5px'}}/>
        <h6 className='domain-all'>ALL</h6>
      </Paper>
      <Paper
        onClick={(e) => {
          e.preventDefault();
          handleOnClick(0);
        }}
        className={'domain-box' + ((domain[0] === true && domain[1] === false) ? ' domain-box-clicked' : '')}
        variant="outlined"
        elevation={5}
      >
        <img src={HardwareIcon} className="domain-image" alt='' />
        <h6>HARDWARE</h6>
      </Paper>
      <Paper
        onClick={(e) => {
          e.preventDefault();
          handleOnClick(1);
        }}
        className={'domain-box' + ((domain[0] === false && domain[1] === true) ? ' domain-box-clicked' : '')}
        variant="outlined"
        elevation={5}
      >
        <img src={SoftwareIcon} className="domain-image" alt='' />
        <h6>SOFTWARE</h6>
      </Paper>
    </div>
  );
}
