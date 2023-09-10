import React, { useEffect, useRef, useState } from 'react'
import Dashboard from '../Components/Dashboard'

const DashboardPage = () => {
  const [data, setData] = useState([])
  const onInputFocus = useRef(null)
  const [deleteData, setDeleteData] = useState([])

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

  const handleSelectedUser = (event, id) => { 
    if(deleteData.includes(id)) {
      setDeleteData(deleteData.filter(item => item !== id))
    } else {
      setDeleteData([...deleteData, id])
    }
  }

  const onDeleteSelectedUser = () => {
    const newData = data.filter((item) => !deleteData.includes(item.id))
    setData(newData)
    setDeleteData([])
  }

  const toggleSelectAll = () => {
    if(deleteData.length === data.length) {
      setDeleteData([])
    } else {
      setDeleteData(data.map(item => item.id))
    }
  }

  return (
    <>
      <Dashboard data={data} onHandleDeleteClick={onHandleDeleteClick} onHandleEditClick={onHandleEditClick} onInputFocus={onInputFocus} handleInputEmailChange={handleInputEmailChange} handleSelectedUser={handleSelectedUser} onDeleteSelectedUser={onDeleteSelectedUser} toggleSelectAll={toggleSelectAll} deleteData={deleteData} />
    </>
  )
}

export default DashboardPage