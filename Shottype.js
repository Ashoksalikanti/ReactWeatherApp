import React,{useState} from 'react'
import {Paper,Typography,Link,Container, MenuItem,Box,Select,FormControl,Button} from "@mui/material"
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpLong,faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'
 
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

const Shottype = () => {
  const classes=useStyles()
   const [name, setname] = useState('')
   const handleChange = (event) => {
    setname(event.target.value);
  };
   
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
  return (
   <>
        <Paper sx={{height:60,width:1,display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}} elevation={3}>
         
        <Typography variant='h4'>Analyse by shot type</Typography></Paper>
       

        <Container maxWidth="sm"  >
        <div className='mt-2  d-flex  '>  
       <Link href="#" underline='none' color='rgb(155, 158, 158)' ><Typography variant='h6'>My Matches  <ArrowForwardIosIcon fontSize="inherit"/></Typography></Link>
       
       <Link href="#" underline='none' color='rgb(155, 158, 158)' ><Typography variant='h6'>Matches <ArrowForwardIosIcon fontSize="inherit"/></Typography></Link>
       
       <Link href="#" underline='none' color='blue'><Typography variant='h6'>Basic Analysis </Typography></Link>
       </div>
        <Typography sx={{mt:10 ,display:'flex',flex:'start'}}>Player</Typography>
      
       <Box sx={{ minWidth: 120 }}>
      <FormControl  fullWidth variant='filled'  sx={{backgroundColor:'rgb(255, 204, 254)',borderRadius:1}}>
   
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleChange}
        >
        {Name.map((val)=><MenuItem value={val.id}>{val.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
       
   <div className='d-flex justify-content-between mt-2 '>
  
   <Box sx={{minWidth:120}}>
         <Typography sx={{my:1}}>Short Type</Typography>
      <FormControl  fullWidth variant='filled'  sx={{backgroundColor:'rgb(255, 204, 254)',borderRadius:1}}>
   
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleChange}
        >
        {Name.map((val)=><MenuItem value={val.id}>{val.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
    <Box  sx={{minWidth:120}} >
         <Typography sx={{my:1}}>Game</Typography>
      <FormControl  fullWidth variant='filled'  sx={{backgroundColor:'rgb(255, 204, 254)',borderRadius:1}}>
   
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleChange}
        >
        {Name.map((val)=><MenuItem value={val.id}>{val.name}</MenuItem>)}
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
      <table className="table table-bordered  table-striped" sx={{mb:4}}>
      <thead style={{height:100}} >
    <tr >
      <th   scope="col"><span className='bg-secondary'>Overview <br/> <br/> <br/></span></th>
      <th scope="col">Forehand <br/> <br/> <FontAwesomeIcon icon= {faArrowUpLong} />  <FontAwesomeIcon icon={faSquareArrowUpRight} /> </th>
      <th scope="col">Backhand  <br/> <br/> <FontAwesomeIcon icon= {faArrowUpLong}  /> <FontAwesomeIcon icon={faSquareArrowUpRight} />  </th>
      <th scope="col">Overhead <br/> <br/> <FontAwesomeIcon icon= {faArrowUpLong} /> <FontAwesomeIcon icon={faSquareArrowUpRight} /> </th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height:50}}>
      <th scope="row">count</th>
      <td>12  3</td>
      <td>0  0</td>
      <td>18  12</td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Winner</th>
      <td>4  1</td>
      <td>0  0</td>
      <td>3  6</td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Winner%</th>
      <td >33  33</td>
      <td>0  0</td>
      <td>17  50</td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Error</th>
      <td >1  2</td>
      <td>0  0</td>
      <td>3  0</td>
    </tr>
    <tr style={{height:50}}>
      <th scope="row">Error%</th>
      <td >8  67</td>
      <td>0  0</td>
      <td>17 0</td>
    </tr>
  </tbody>
     </table>
     <Link    className="text-decoration-none " sx={{my:4}}><Button  
                  type="button"
                  
                  sx={{ borderRadius:'4rem',
    width:'30rem',
    mb:4,
    height:'2rem',
    color:'white',
    fontSize:'1rem',
    backgroundColor:'rgb(87, 235, 141)',
    '&:hover': {
      backgroundColor: 'rgb(8, 117, 48)',
      color:'white'
     
    } }} >Compare by sets</Button></Link>
        </Container>
        
   </>
  )
}

export default Shottype