import { Box, Button, Stack, Typography } from "@mui/material"
import {Link} from 'react-router-dom'
import Banner from "../components/Banner"
import bannerImage from "../assets/images/workout.jpeg"
export default function Home() {
    return(
        <Box position='relative'>
            <Banner />
            <Stack direction='row'>
                <Button variant='contained' style={{marginLeft: '68px', marginTop: '50px'}}><Link to='/exercise' style={{textDecoration: 'none', color: 'white'}}>Explore Exercises</Link></Button>
                <Button variant='contained' style={{marginLeft: '68px', marginTop: '50px', height: '50px'}}><Link to='/tracker' style={{textDecoration: 'none', color: 'white'}}>Fitness DIY</Link></Button>
            </Stack>
            <img src={bannerImage} className="banner-img"/>
            <Typography fontWeight='700' color='#ff2625' sx={{opacity: 0.1}} fontSize='200px' mt='45px' ml='80px'>
                WorkOut
            </Typography>
        </Box>
    )
}