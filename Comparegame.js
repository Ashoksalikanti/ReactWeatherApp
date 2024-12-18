import React,{useState} from 'react'
import {Paper,Typography,Link,Container, MenuItem,Box,Select,FormControl,Button} from "@mui/material"
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const useStyles = makeStyles(theme=>({
  btn1:{
    borderRadius:1,
    width:'20rem',
    height:'3.5rem',
    fontSize:'2rem',
    backgroundColor:'backgroundColor:',
    '&:hover': {
      backgroundColor: 'rgb(8, 117, 48)',
      color:'white'
     
    }
    
  }}
 

))
const Name=[
  {
    id:1,
    name:'Lokesh',
  },
  {
    id:2,
    name:'Guru',

  },
  {
    id:3,
    name:'srinivas'
  }
]
const Shotname=[{
  id:1,
  name:'smash'
},{
  id:2,
  name:'block'
},
{
id:3,
name:'clear'
},{
id:4,
name:'Net'
},{
id:5,
name:'Drop'
},{id:6,name:'Drive'},{id:7,name:'Toss'},{id:8,name:'Push'}]

const  Comparegame = () => {
  const classes=useStyles()
   const [name, setname] = useState('Lokesh')
   const [Shot, setShot] = useState('Smash')
   const handleChange = (event) => {
    setname(event.target.value);
  };
  const Handelchange=(event)=>{
    setShot(event.target.value)
  }
   
  
  return (
   <>
        <Paper sx={{height:60,width:1,display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}} elevation={3}>
        
        <Typography variant='h4'>Compare Across games</Typography></Paper>
       

        <Container maxWidth="sm"  >
        <div className='mt-2  d-flex  '>  
       <Link href="#" underline='none' color='rgb(155, 158, 158)' ><Typography variant='h6'>My Matches  <ArrowForwardIosIcon fontSize="inherit"/></Typography></Link>
       
       <Link href="#" underline='none' color='rgb(155, 158, 158)' ><Typography variant='h6'>Matches <ArrowForwardIosIcon fontSize="inherit"/></Typography></Link>
       
       <Link href="#" underline='none' color='blue'><Typography variant='h6'>Basic Analysis </Typography></Link>
       </div>
        
      
       
   <div className='d-flex justify-content-between mt-5'>
  
    <Box  sx={{minWidth:120}} >
    
         <Typography sx={{m:1}}>Player</Typography>
      <FormControl fullWidth variant='filled' sx={{backgroundColor:'#FFEFD6',borderRadius:2}}>
   
        <Select
          
          value={name}
          
           
          onChange={handleChange}
        >
        {Name.map((val)=><MenuItem value={val.id}>{val.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
    <Box  sx={{minWidth:120}} >
         <Typography sx={{my:1,}}>Game</Typography>
      <FormControl  fullWidth variant='filled'   sx={{backgroundColor:'#FFEFD6',borderRadius:2}}>
   
        <Select
          
          value={Shot}
          
          
          onChange={Handelchange}
        >
        {Shotname.map((val)=><MenuItem selected value={val.id}>{val.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>

   </div>
   <div className='d-flex flex-column'>
     <Typography  className='fs-5' sx={{my:1}}> <span className='fw-bold'>Lokesh</span> <span className='text-secondary'>v/s</span> <span className='text-secondary'>guru</span></Typography>
     <Typography className='fs-5'>Olympics Tokyo</Typography>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <img src=" https://matchday.ai/static/media/Smash.fc6ce67b.svg" alt="reloading" height={100} width={250}/>
        <img src="https://matchday.ai/static/media/Straight.e162780b.svg" alt="reloding" height={60} width={200}/>
    </div>
     
      
      </div>
      <table className="table table-bordered  table-striped table-responsive" sx={{mb:6}}>
      <thead   style={{height:120,}}>
    <tr class>
      <th   scope="col"><span ></span></th>
      <th scope="col"> Game 1 <br/> <br/><Button variant='contained' sx={{'&:hover':{backgroundColor:'#48B499'}}}></Button></th>
      <th scope="col">Game 2 <br/> <br/><Button variant='contained' sx={{'&:hover':{backgroundColor:'#48B499'}}}></Button></th>
      <th scope="col">Game 3 <br/> <br/><Button variant='contained' sx={{'&:hover':{backgroundColor:'#48B499'}}}></Button></th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height:50}}>
      <th scope="row">count</th>
      <td>9</td>
      <td>15</td>
      <td>17</td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Winner</th>
      <td>2</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Winner%</th>
      <td >22</td>
      <td>  20</td>
      <td>18 </td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Error</th>
      <td >0</td>
      <td>3 </td>
      <td>1</td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Error%</th>
      <td >0</td>
      <td>20 </td>
      <td>6</td>
    </tr>
  </tbody>
     </table>
      
        </Container>
        
   </>
  )
}

export default  Comparegame