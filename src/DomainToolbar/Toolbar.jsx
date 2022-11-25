import React, { useState } from 'react'
import { Paper, Box } from '@material-ui/core'
import { Android, Code, Language, SelectAll, CheckBox, Flag } from '@material-ui/icons'
import './Toolbar.css'
import HardwareIcon from "../assets/HardwareIcon.svg"
import SoftwareIcon from "../assets/SoftwareIcon.svg"

export default function Toolbar(props) {
    let setDomain = props.setDomain;
    let domain = props.domain
    const handleOnClick = (index)=>{
        // if(index === -1){
        //     setDomain([false,false]);
        //     return;
        // }
        // setDomain([false,false,false,false]);
        let newDomain = [];
        // domain = [];
        for(let i=0;i<2;i++){
            if(i === index){
                if(domain[i]!=true)
                    newDomain.push(true)
                else
                    newDomain.push(false)
            }else{
                newDomain.push(false)
            }
        }
        setDomain(newDomain);
        // console.log(domain);
    }
    return (
        <div className='domain-toolbar'>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(0)
            }} className={"domain-box"+(domain[0] == true ? ' domain-box-clicked' : '')} variant="outlined" elevation={5}  >
                <img src={HardwareIcon} className="domain-image" />
                <h6>HARDWARE</h6>
            </Paper>
            <Paper onClick={(e)=>{
                e.preventDefault();
                handleOnClick(1)
            }} className={"domain-box"+(domain[1] == true  ? ' domain-box-clicked' : '')} variant="outlined" elevation={5} >
                <img src={SoftwareIcon} className="domain-image" />
                <h6>SOFTWARE</h6>
            </Paper>
        </div>
    )
}
