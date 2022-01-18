import React, { useState } from 'react'
import { Paper, Box } from '@material-ui/core'
import { Android, Code, Language, SelectAll, CheckBox } from '@material-ui/icons'
import './Toolbar.css'

export default function Toolbar(props) {
    let setDomain = props.setDomain;
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
            }} className="domain-box" variant="outlined" elevation={5}>
                <CheckBox className='domain-icon'></CheckBox>
                <h6>All</h6>
            </Paper>
            <Paper onClick={(e)=>{
                e.preventDefault();
                handleOnClick(0)
            }} className="domain-box" variant="outlined" elevation={5}>
                <SelectAll className='domain-icon'></SelectAll>
                <h6>Tronix</h6>
            </Paper>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(1)
            }} className="domain-box" variant="outlined" elevation={2}>
                <Language className='domain-icon'></Language>
                <h6>Web Dev</h6>
            </Paper>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(2)
            }} className="domain-box" variant="outlined" elevation={2}>
                <Code className='domain-icon'></Code>
                <h6>Algos</h6>
            </Paper>
            <Paper onClick={(e) => {
                e.preventDefault();
                handleOnClick(3)
            }} className="domain-box" variant="outlined" elevation={2}>
                <Android className='domain-icon'></Android>
                <h6>App Dev</h6>
            </Paper>
        </div>
    )
}
