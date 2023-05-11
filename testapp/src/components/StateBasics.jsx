import { Button, TextField,Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[pname,setpname] = useState("CLASS");
    var[data,setData] =useState()
    const changeName =()=>{
        console.log("clicked");
        setpname(data)
    }
    const readValue = (e)=>{
        setData(e.target.value);
        console.log(data)
    }
  return (
    <div>
        <Typography variant='h3'>WELCOME  {pname}</Typography>
        <br/>
        <TextField label='name' variant='outlined'onChange={readValue}/>
        <br/><br/>
        <Button variant='contained' onClick={changeName}>change</Button>
        </div>
  )
}

export default StateBasics