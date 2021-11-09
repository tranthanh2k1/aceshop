import React, { useState, useEffect } from 'react'
import Routes from "./Routers";
import ServiceAPI from './api/serviceAPI'

function App() {
  const [services, setService] = useState([])

  const addService = async (data) => {
    try {
      const { saveData } = await ServiceAPI.add(data)
      setService([
        ...services,
        saveData
      ])
    } catch (error) {
      console.log(error)
    }
  }

  return <Routes listService={services} onAdd={addService}/>;
}

export default App;
