import { useState, useEffect } from "react"
import {Box, Button, Stack, Typography} from '@mui/material'
import { exerciseOptions } from "../utilities/fetchData";
import { fetchData } from "../utilities/fetchData";
import FlipPage from "../components/FlipPage";
import Exercises from "../components/Exercises";

export default function ExerciseCategory() {
    
    const [bodyPartsData, setBodyPartsData] = useState([])
    const [eqptData, setEqptData] = useState([])

    const [filterData, setFilterData] = useState([])
    const [bodyPart, setBodyPart] = useState("all")
    const [eqpt, setEqpt] = useState("all")

    const [isBodyPart, setisBodyPart] = useState(true)

    useEffect(() => {
        async function fetchExercises() {
            const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=20';
            const bodyParts = await fetchData(url, exerciseOptions);

            setBodyPartsData(["all", ...bodyParts])

            const eqptUrl = 'https://exercisedb.p.rapidapi.com/exercises/equipmentList?limit=20';
            const eqptParts = await fetchData(eqptUrl, exerciseOptions)

            setEqptData(["all", ...eqptParts])
        }
        fetchExercises();
    }, [])

    return(
        <>
        <Stack alignItems='center' mt='50px' justifyContent='center' p='30px'>
            <Typography fontWeight='700' sx={{fontSize: {lg: '45px', sm: '35px', xs: '30px'}}} mb='50px'>
                All awesome exercises in the pocket 
            </Typography>
            <Box position='relative' mb='200px'>
                <Button className='search-btn' sx={{bgcolor: '#ff2625', color: 'white', textTransform: 'none', width: {lg: '180px', xs: '90px'}, fontSize: {lg: '22px', xs: '18px'}, height: '52px', position: 'absolute', mt: '30px', ml: '-400px'}} onClick={() => setisBodyPart(true)}>
                    By Body Part
                </Button>
                <Button className='search-btn' sx={{bgcolor: '#ff2625', color: 'white', textTransform: 'none', width: {lg: '180px', xs: '90px'}, fontSize: {lg: '22px', xs: '18px'}, height: '52px', position: 'absolute', mt: '30px', ml: '200px'}} onClick={() => setisBodyPart(false)}>
                    By Equipment
                </Button>
            </Box>
            <Box sx={{position: 'relative', width: '100%', p: '40px'}}>
                <FlipPage bodyPartsData={bodyPartsData} setBodyPart={setBodyPart} eqptData={eqptData} setEqpt={setEqpt} isBodyPart={isBodyPart}/>
            </Box>
        </Stack>
        <Exercises filterData={filterData} setFilterData={setFilterData} bodyPart={bodyPart} eqpt={eqpt} isBodyPart={isBodyPart}/>
        </>
    )
}