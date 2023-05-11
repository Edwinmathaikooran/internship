import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div >
        <h1>CRISTIANO RONALDO</h1>
        <br/>
        <input type="text" placeholder='name'/>
        <Typography variant='h1'color='#1976d2'>GREATEST OF ALL TIME</Typography>
        <br></br>
        <TextField label='name' variant='standard'/>
        <br/><br/>
        <Button variant="text" color="secondary">text</Button> 
        <br/><br/>
        <Button variant="contained" color="success">contained</Button>
        <br/><br/>
        <Button variant="outlined" color="error">outlined</Button>
        <br/><br/>

        
    </div>

  )
}
export default Basics