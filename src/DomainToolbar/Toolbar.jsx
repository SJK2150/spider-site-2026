import React, { useState } from 'react'
import { Paper, Box } from '@material-ui/core'
import { Android, Code, Language, SelectAll, CheckBox, Flag } from '@material-ui/icons'
import './Toolbar.css'

export default function Toolbar(props) {
    let setDomain = props.setDomain;
    let domain = props.domain
    const handleOnClick = (index)=>{
        if(index === -1){
            setDomain([false,false,false,false]);
            return;
        }
        // setDomain([false,false,false,false]);
        let domain = [];
        // domain = [];
        for(let i=0;i<4;i++){
            if(i === index){
                domain.push(true)
            }else{
                domain.push(false)
            }
        }
        setDomain(domain);
        // console.log(domain);
    }
    return (
        <div className='domain-toolbar'>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(-1)
            }} className={"domain-box"+(domain[0] == false && domain[1] == false && domain[2] == false && domain[3] == false ? ' domain-box-clicked' : '')} variant="outlined" elevation={5}  >
                <CheckBox className='domain-icon'></CheckBox>
                <h6>ALL</h6>
            </Paper>
            <Paper onClick={(e)=>{
                e.preventDefault();
                handleOnClick(0)
            }} className={"domain-box"+(domain[0] == true  ? ' domain-box-clicked' : '')} variant="outlined" elevation={5} >
                <SelectAll className='domain-icon'></SelectAll>
                <h6>TRONIX</h6>
            </Paper>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(1)
            }} className={"domain-box"+(domain[1] == true  ? ' domain-box-clicked' : '')} variant="outlined" elevation={2} >
                <Language className='domain-icon'></Language>
                <h6>WEB DEV</h6>
            </Paper>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(2)
            }} className={"domain-box"+(domain[2] == true  ? ' domain-box-clicked' : '')} variant="outlined" elevation={2}>
                <Code className='domain-icon'></Code>
                <h6>ALGOS</h6>
            </Paper>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(3)
            }} className={"domain-box"+(domain[3] == true  ? ' domain-box-clicked' : '')} variant="outlined" elevation={2} >
                <Android className='domain-icon'></Android>
                <h6>APP DEV</h6>
            </Paper>
        </div>
    )
}
