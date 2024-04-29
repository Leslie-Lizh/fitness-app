// import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseCategory from './pages/ExerciseCategory'
import ExerciseDetail from './pages/ExerciseDetail'
import FitnessTracker from './pages/FitnessTracker'

function App() {

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
      </Box>
    </>
  )
}

export default App
