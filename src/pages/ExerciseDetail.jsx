import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData } from "../utilities/fetchData"
import { Box } from "@mui/material"
import SimilarExercise from "../components/SimilarExercise"
import DetailView from "../components/DetailView"

export default function ExerciseDetail() {
    const { id } = useParams();

    const [exerciseDetail, setExerciseDetail] = useState([])
    const [muscleData, setMuscleData] = useState([])
    const [eqptData, setEqptData] = useState([])

    useEffect(() => {
        async function fetchExerciseData() {
            const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseData);

            // fetch exercise data related to the target muscle of the selected exercise card
            const targetMuscle = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseData.target}`, exerciseOptions);
            setMuscleData(targetMuscle);

            // fetch exercise data related to the used equipment of the selected exercise card
            const equipment = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseData.equipment}`, exerciseOptions);
            setEqptData(equipment)
        }
        fetchExerciseData(); // network request will not be sent untill the id is generated, which happens when a card is clicked.
    }, [id])

    if (!exerciseDetail) return <div>Data is loading</div>;

    return(
        <Box sx={{mt: {lg: '70px', xs: '50px'}}}>
            <DetailView exerciseDetail={exerciseDetail}/>
            <SimilarExercise muscleData={muscleData} eqptData={eqptData}/>
        </Box>
    )
}