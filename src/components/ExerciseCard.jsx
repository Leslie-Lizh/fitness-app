import { Link } from "react-router-dom"
import { Button, Stack, Typography } from "@mui/material"

// This is each card in the Display Result section
export default function ExerciseCard({data}) {
    return(
        // This is where useParams in ExerciseDetail get the id  <- data.id
        <Link className="exercise-card" to={`/exercise/${data.id}`}> 
            <img src={data.gifUrl} alt={data.name} loading="lazy"/>
            <Stack direction='row'>
                <Button sx={{color: 'white', background: 'blue', fontSize: '20px', borderRadius: '30px', textTransform: 'capitalize', ml: '20px', '&:hover': {background: 'blue'}}}>{data.bodyPart}</Button>
                <Button sx={{color: 'white', background: 'green', fontSize: '20px', borderRadius: '30px', textTransform: 'capitalize', ml: '20px', '&:hover': {background: 'green'}}}>{data.target}</Button>
            </Stack>
            <Typography ml='20px' fontWeight='bold' fontSize='26px' mt='15px' color='black' textTransform='capitalize'>
                {data.name}
            </Typography>
        </Link>
    )
}