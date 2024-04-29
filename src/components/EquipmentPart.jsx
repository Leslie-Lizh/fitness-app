import { Stack, Typography } from "@mui/material"
import gymicon from '../assets/icons/gymcon.jpeg'

export default function EquipmentPart({parts, setEqpt}) {
    return(
        <Stack className='Equipment-card' type='button' alignItems='center' justifyContent='center' sx={{border: '1px solid black', background: 'white', borderBottomRightRadius: '20px', width: '250px', height: '280px', cursor: 'pointer', gap: '40px'}} onClick={() => {setEqpt(parts); window.scrollTo({top: 1000, behavior: "smooth"})}}>
            <img src={gymicon} style={{width: '80px', height: '80px'}} />
            <Typography fontSize='30px' fontWeight='bold' textAlign='center'>{parts}</Typography>
        </Stack>
    )
}