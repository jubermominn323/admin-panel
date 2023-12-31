import React, { forwardRef } from 'react'
import Flex from '../atoms/Flex'
import { styled } from 'styled-components'
import Input from '../atoms/Input'

const Td = styled.td`
  text-align: center;
  padding: 12px 8px;
`

const Span = styled.span`
  margin-right: 8px;
`

const UserDataTable = ({data, onHandleDeleteClick, onHandleEditClick, handleInputEmailChange, handleSelectedUser, onDeleteSelectedUser, toggleSelectAll, deleteData, onInputFocus, filteredData}) => {
  const dataToShow = filteredData.length > 0 ? filteredData : data
  
  return (
    <Flex>
      <table>
        <thead>
        <tr>
          <th><Input type='checkbox' onChange={toggleSelectAll} disabled={data.length === 0} checked={deleteData.length === data.length} /></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {
          dataToShow.length > 0 &&
          dataToShow.map((item) => {
            return (
              <tr key={item.id} style={{backgroundColor: deleteData.includes(item.id) ? '#E5E4E2' : null}}>
                <Td>
                  <Flex>
                    <Input type='checkbox' checked={deleteData.includes(item.id)} onChange={(event) => handleSelectedUser(event, item.id)} />
                  </Flex>
                </Td>
                <Td>{item.name}</Td>
                <Td><Input ref={onInputFocus} onChange={(event) => handleInputEmailChange(event, item.id)} value={item.email} /></Td>
                <Td>{item.role}</Td>
                <Td>
                  <Flex flexDirection={'row'} justifyContent={'center'}>
                    <Span onClick={() => onHandleEditClick()}>Edit</Span>
                    <span onClick={() => onHandleDeleteClick(item.id)}>Delete</span>
                  </Flex>
                </Td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <button disabled={deleteData.length === 0} onClick={onDeleteSelectedUser}>Delete selected</button>
    </Flex>
  )
}

export default forwardRef(UserDataTable)