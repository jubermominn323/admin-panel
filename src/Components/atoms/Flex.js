import React from 'react'
import { css, styled } from 'styled-components'

const Flex = styled.div`
  display: flex;
  ${({ flexDirection }) => flexDirection && css`flex-direction: ${flexDirection};`}
  ${({ alignItems }) => alignItems && css`align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && css`justify-content: ${justifyContent};`}
`
Flex.defaultProps = {
  flexDirection: 'column'
,}

export default Flex