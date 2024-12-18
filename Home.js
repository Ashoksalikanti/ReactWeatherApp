 
import { Box, Card, CardContent, Container, Paper, Typography } from '@mui/material'
import {Route,Link,Router} from 'react-router-dom'
import '../App.css';
import React from 'react'

 

 
 
const Home = () => {
  return (
     <>
     <Paper sx={{height:60,width:1,display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}} elevation={3}><Typography variant='h4'>View Analytics</Typography></Paper>
       
       <Container >
       <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap','& >:not(style)':{
             m:7,
             width:300,
             height:200,
             backgroundColor:'rgb(240,250,249)',
             borderRadius:1,
             '&:hover':{
                 backgroundColor:'rgb(229, 227, 255)',
                 
             }
         },}}>
<Link  to="/Shot" className="nav-link mt-5"  color="inherit"><Typography  variant='h5'  sx={{mt:9,color:'black','&:hover':{color:'black'}}} >Analyse by shot Type</Typography></Link>
<Link  to="/compare"  className="nav-link"  ><Typography  variant='h5' sx={{mt:9,color:'black','&:hover':{color:'black'}}} >Compare across games</Typography></Link>
<Link  to="/analyse"  className="nav-link" ><Typography  variant='h5' sx={{mt:9,color:'black','&:hover':{color:'black'}}} >Analyse by Rally Length</Typography></Link>
<Link  to="/analyse"  className="nav-link" ><Typography  variant='h5' sx={{mt:9,color:'black','&:hover':{color:'black'}}} >Analyse by Rally Length</Typography></Link>

         </Box>
       </Container>
        
     </>
  )
}

export default Home
 