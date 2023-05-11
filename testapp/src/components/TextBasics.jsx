import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function TextBasics() {
    var[val1,setVal1] = useState()
    var[val2,setVal2] = useState()
    const readName1 =(e)=>{
        setVal1(e.target.value);
    }
    
    const readName2 =(e)=>{
        setVal2(e.target.value);
    }
    
  return (
    <div>
        <Typography variant='h3'>your name is {val1} {val2}</Typography>
        <br/><br/>
        <TextField label='name'onChange={readName1}/>
        <br/><br/>
        <TextField label='name'onChange={readName2}/>
        <br/><br/>

    </div>
  )
}

export default TextBasics