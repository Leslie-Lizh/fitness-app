import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [apiData, setApiData] = useState([])
  const [airData, setAirData] = useState([])

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

  useEffect(() => {
    (async function () {
      const url = 'https://api.airtable.com/v0/appeJcPDiKfIk03Rc/Table%201';
      const options = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer pat0uHbyykpYkbsGA.6acbfa9e949f3632d070b6b7f726443fff54246c6df73911ef9754eccb772780"
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data?.records);
        setAirData(data?.records)
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])

  console.log(airData)
  return (
    <>
      <h1>Header is here</h1>
      {/* {data.map(d => <p key={d}>{d}</p>)} */}
      {airData.map((data, idx) => <p key={idx}>{data?.fields?.target_muscle}</p>)}
    </>
  )
}

export default App
