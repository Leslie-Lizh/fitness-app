import { Stack, Typography } from "@mui/material"
import gymicon from '../assets/icons/gymcon.jpeg'

export default function BodyPart({parts, bodyPart, setBodyPart}) {
    return(
        <Stack className='bodyPart-card' type='button' alignItems='center' justifyContent='center' sx={{border: '1px solid black', background: 'white', borderBottomLeftRadius: '20px', width: '250px', height: '280px', cursor: 'pointer', gap: '40px'}} onClick={() => {setBodyPart(parts); window.scrollTo({top: 1800, behavior: "smooth"})}}>
            <img src={gymicon} style={{width: '80px', height: '80px'}}/>
            <Typography fontSize='30px' fontWeight='bold'>{parts}</Typography>
        </Stack>
    )
}