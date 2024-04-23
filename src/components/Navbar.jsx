import {Link} from 'react-router-dom'
import { Stack } from '@mui/material'
import logo from '../assets/images/fitness-logo.jpeg'
export default function Navbar() {
    return(
        <Stack direction='row' justifyContent='space-around' sx={{gap: {sm: '120px', xs: '40px'}, mt: {sm: '30px', xs: '20px'}, justifyContent: 'none'}}>
            <Link to='/'>
                <img src={logo} style={{width: '100px', height: '100px', margin: '0 20px'}}/>
            </Link>
            <Stack direction='row' gap='50px' fontSize='30px' alignItems='center'>
                <Link to='/' style={{textDecoration: 'none', borderBottom: '3px solid purple'}}>Home</Link>
                <Link to='/exercise' style={{textDecoration: 'none'}}>Exercise Category</Link>
                <Link to='/tracker' style={{textDecoration: 'none'}}>My Fitness Tracker</Link>
            </Stack>
        </Stack>
            
    )
}