import { Stack, Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard'

export default function SimilarExercise({muscleData, eqptData}) {
    let similarMuscle;
    if (muscleData.length === 0) {
        similarMuscle = <div>No Data</div>
    } else if (muscleData.length > 3) {
        const slicedMuscle = muscleData.slice(0, 3)
        similarMuscle = slicedMuscle.map((data) => <ExerciseCard data={data} key={data.id} />)
    } else {
        similarMuscle = muscleData.map((data) => <ExerciseCard data={data} key={data.id} />)
    }

    let similarEqpt;
    if (eqptData.length === 0) {
        similarEqpt = <div>No Data</div>
    } else if (eqptData.length > 3) {
        const slicedEqpt = eqptData.slice(0, 3)
        similarEqpt = slicedEqpt.map((data) => <ExerciseCard data={data} key={data.id} />)
    } else {
        similarEqpt = eqptData.map((data) => <ExerciseCard data={data} key={data.id} />)
    }

    return(
        <Box sx={{ mt: { lg: '100px', xs: '20px' }}}>
            <Typography sx={{ fontSize: { lg: '40px', xs: '25px' }, ml: '10px' }} fontWeight={700} mb="33px">
                Exercises with similar Target Muscle
            </Typography>
            <Stack direction="row" justifyContent='space-between' sx={{ p: '10px', position: 'relative' }}>
                {similarMuscle}
            </Stack>
            <Typography sx={{ fontSize: { lg: '40px', xs: '25px' }, ml: '10px' }} fontWeight={700} mb="33px">
                Exercises with similar Equipment
            </Typography>
            <Stack direction="row" justifyContent='space-between' sx={{ p: '10px', position: 'relative' }}>
                {similarEqpt}
            </Stack>
        </Box>
    )
}