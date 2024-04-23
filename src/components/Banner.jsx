import {Box, Typography} from '@mui/material'

export default function Banner() {
    return(
        <Box sx={{
            mt: {lg: '220px', xs: '280px'},
            ml: {sm: '50px'}
        }} position='relative' p='20px'>
            <Typography fontWeight='700' fontSize='32px'>
                Join the Fitness Center
            </Typography>
            <Typography fontWeight='700' sx={{fontSize: {lg: '52px', xs: '40px'}}} mb='23px' mt='30px'>
                We exercise, we sweat<br /> and we make excellence 
            </Typography>
            <Typography fontSize='20px' lineHeight='60px'>
                Come and checkout the exercises that fits you best !
            </Typography>
        </Box>
    )
}