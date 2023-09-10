import React, { useEffect, useRef, useState } from 'react'
import Dashboard from '../Components/Dashboard'

const DashboardPage = () => {
  const [data, setData] = useState([])
  const onInputFocus = useRef(null)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    const data = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    const resp = await data.json()
    setData(resp)
  }

  const onHandleDeleteClick = (id) => {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }

  const onHandleEditClick = () => {
    onInputFocus.current.focus()
  }

  const handleInputEmailChange = (event, id) => {
    const updatedData = data.map(item => {
      if(item.id === id) {
        return {...item, email: event.target.value}
      }
      return item
    })
    setData(updatedData)
  }
  return (
    <>
      <Dashboard data={data} onHandleDeleteClick={onHandleDeleteClick} onHandleEditClick={onHandleEditClick} onInputFocus={onInputFocus} handleInputEmailChange={handleInputEmailChange} />
    </>
  )
}

export default DashboardPage