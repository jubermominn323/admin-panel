import React from 'react'
import { styled } from 'styled-components'
import Flex from './atoms/Flex'
import Input from './atoms/Input'
import UserDataTable from './organisms/UserDataTable'

const ExtendedFlex = styled(Flex)`
  width: 80%;
  margin: 40px auto;
`
const ExtendedInput = styled(Input)`
  padding: 12px 6px;
  margin-bottom: 24px;
`

const Dashboard = ({data, onHandleDeleteClick, onHandleEditClick, onInputFocus, handleInputEmailChange}) => {

  return (
    <ExtendedFlex>
      <ExtendedInput placeholder='search by name, email or role' />
      <UserDataTable data={data} onHandleDeleteClick={onHandleDeleteClick} onHandleEditClick={onHandleEditClick} onInputFocus={onInputFocus} handleInputEmailChange={handleInputEmailChange} />
    </ExtendedFlex>
  )
}

export default Dashboard