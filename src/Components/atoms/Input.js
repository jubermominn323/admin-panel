import { css, styled } from 'styled-components'

const Input = styled.input`
  ${({ backgroundColor }) => backgroundColor && css`background-color: ${backgroundColor};`}
  ${({ borderRadius }) => borderRadius && css`border-radius: ${borderRadius}`}
`
Input.defaultProps = {
  borderRadius: '4px',
}

export default Input