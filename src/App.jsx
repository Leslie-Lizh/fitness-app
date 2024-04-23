import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseCategory from './pages/ExerciseCategory'
import ExerciseDetail from './pages/ExerciseDetail'
import FitnessTracker from './pages/FitnessTracker'
import Footer from './components/Footer'

function App() {
  // const [apiData, setApiData] = useState([])
  // const [airData, setAirData] = useState([])

  // useEffect(() => {
  //   async function fetchExercises() {
  //     const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  //     const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '012d80296emsh0121727cf2a9408p10db9cjsn1daa0451ecce',
  //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //     }
  //     };
  //     const res = await fetch(url, options);
  //     const json = await res.json();
  //     setData(json)
  //   }
  //   fetchExercises();
  // }, [])


  // useEffect(() => {
  //   (async function () {
  //     const url = 'https://api.airtable.com/v0/appeJcPDiKfIk03Rc/Table%201';
  //     const token = "pat0uHbyykpYkbsGA.6acbfa9e949f3632d070b6b7f726443fff54246c6df73911ef9754eccb772780"
  //     try {
  //     const data = {
  //       // id: "abcde",
  //       fields: {
  //         target_muscle: "Back",
  //         status: true,
  //         deleted: false,
  //         equipment: "assisted"
  //       }
  //     }
  //     await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify(data)
  //     });
      
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, [])

  return (
    <>
      <Box width="400px" sx={{width: {xl: '1488px'}}} m='auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise' element={<ExerciseCategory />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
          <Route path='/tracker' element={<FitnessTracker />} />
        </Routes>
        <Footer />
      </Box>
      {/* {data.map(d => <p key={d}>{d}</p>)} */}
      {/* {airData?.map((data, idx) => <p key={idx}>{data?.fields?.target_muscle}</p>)} */}
    </>
  )
}

export default App
