import React, { forwardRef } from 'react'
import Flex from '../atoms/Flex'
import { styled } from 'styled-components'
import Input from '../atoms/Input'

const Td = styled.td`
  text-align: center;
  padding: 12px 8px;
`
const Line = styled.div`
  border: 1px solid red;
`
const Span = styled.span`
  margin-right: 8px;
`

const UserDataTable = ({data, onHandleDeleteClick, onHandleEditClick, onInputFocus, handleInputEmailChange}) => {
  console.log(data)
  return (
    <Flex>
      <table>
        <thead>
        <tr>
          <th><Input type='checkbox' /></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {
          data.length > 0 &&
          data.map((item) => {
            return (
              <>
              <tr key={item.id}>
                <Td>
                  <Flex>
                    <Input type='checkbox' />
                  </Flex>
                </Td>
                <Td>{item.name}</Td>
                <Td><Input ref={onInputFocus} onChange={(event) => handleInputEmailChange(event, item.id)} value={item.email} /></Td>
                <Td>{item.role}</Td>
                <Td>
                  <Flex flexDirection={'row'}>
                    <Span onClick={() => onHandleEditClick()}>Edit</Span>
                    <span onClick={() => onHandleDeleteClick(item.id)}>Delete</span>
                  </Flex>
                </Td>
              </tr>
              {/* <Line /> */}
              </>
            )
          })
        }
        </tbody>
      </table>
    </Flex>
  )
}

export default forwardRef(UserDataTable)