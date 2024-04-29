import { useEffect, useState } from "react"
// import Pagination from "@mui/material/Pagination"
import { Pagination } from "@mui/material"
import { Stack, Box, Typography } from "@mui/material"
import { exerciseOptions, fetchData } from "../utilities/fetchData"
import ExerciseCard from './ExerciseCard'

export default function Exercises({filterData, setFilterData, bodyPart, eqpt, isBodyPart}) {

    const exercisesPerPage = 6; // limit no.of exercise card to 6 per page
    const [currentPage, setCurrentPage] = useState(1); // default page

    const lastIndex = currentPage * exercisesPerPage;
    const firstIndex = lastIndex - exercisesPerPage;
    const currentPageExercises = filterData.slice(firstIndex, lastIndex); // if end >= array.length, array.length is used, causing all elements until the end to be extracted 

    // e here is React.ChangeEvent, value is the page, these are by default arguments of the onChange event.
    function handlePage(e, value) {
        setCurrentPage(value);
        window.scrollTo({top: 1000, behavior: 'smooth'})
    }

    // this part handles when body-part card is click. it should be independent from the setFilterData that is invoked during searcch query in ExerciseCategory
    useEffect(()=> {
        async function fetchSelectedExercise() {
            let selectedExercise;
            if (isBodyPart === true) {
                if (bodyPart === 'all') {
                    selectedExercise = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1400', exerciseOptions);
                } else {
                    selectedExercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1400`, exerciseOptions);
                }
            } else {
                if (eqpt === 'all') {
                    selectedExercise = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1400', exerciseOptions);
                } else {
                    selectedExercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${eqpt}?limit=1400`, exerciseOptions);
                }
            }
            setFilterData(selectedExercise);
        }
        fetchSelectedExercise();
    }, [bodyPart, eqpt, isBodyPart]); // by default when page first load, the filterData will use the state of 'all' exercises because it is initial state of the bodyPart defined in ExerciseCategory 

    return(
        <Box id='exercises' mt='50px' p='20px' sx={{mt: {lg: '110px', xs: '40px'}}}>
            <Typography variant="h4" mb='40px'>Display Result</Typography>
            <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{gap: {lg: '110px', xs: '50px'}}}>
                {currentPageExercises.map((data, idx) => (<ExerciseCard key={idx} data={data} />))}
            </Stack>
            <Stack mt='130px' alignItems='center'>
                {filterData.length > 6 && (
                    <Pagination defaultPage={1} count={Math.ceil(filterData.length / exercisesPerPage)} page={currentPage} onChange={handlePage} />
                )}
            </Stack>
        </Box>
    )
}