import { FC, InputHTMLAttributes } from 'react'

import { Input as Container } from './input.styles'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => (
  <Container {...rest} />
)

export default Input
