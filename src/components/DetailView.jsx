import { Typography, Stack, Button } from "@mui/material";
import bodyPartIcon from '../assets/icons/bodyPartIcon.png'
import eqptIcon from '../assets/icons/eqptIcon.png'
import targetIcon from '../assets/icons/targetIcon.png'

export default function DetailView({exerciseDetail}) {
    // object destructure
    const {bodyPart, equipment, gifUrl, instructions, name, target} = exerciseDetail;
    
    const extraDetails = [
        {
            name: bodyPart,
            icon: bodyPartIcon
        },
        {
            name: equipment,
            icon: eqptIcon
        },
        {
            name: target,
            icon: targetIcon
        }
    ]

    return(
        <Stack gap="60px" direction='row' alignItems='center' p='20px'>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '20px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '40px', xs: '20px' } }} fontWeight={700} textTransform="capitalize">
                    {name}
                </Typography>
                <Typography fontWeight='bold'>Steps to Perform:</Typography>
                {instructions?.map((item, idx) => (<Typography  key={item}>{idx + 1} . {item}</Typography>))}
                {extraDetails?.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                        <img src={item.icon} alt='target body muscle and equipment' style={{ width: '70px', height: '70px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                        {item.name}
                        </Typography>
                  </Stack>
                )
                )}
            </Stack>
        </Stack>
    )
}