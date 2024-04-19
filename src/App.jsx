import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchExercises() {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
      const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '012d80296emsh0121727cf2a9408p10db9cjsn1daa0451ecce',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
      };
      const res = await fetch(url, options);
      const json = await res.json();
      setData(json)
    }
    fetchExercises();
  }, [])

  return (
    <>
      <h1>Header is here</h1>
      {data.map(d => <p key={d}>{d}</p>)}
    </>
  )
}

export default App
