import { FC } from 'react'

import { Button } from './button-send-message.styled'
import { ButtonSendMessageProps } from './button-send-meddage.type'

const BUttonSendMessage: FC<ButtonSendMessageProps> = ({ title, ...rest }) => (
  <Button {...rest}>{title}</Button>
)

export default BUttonSendMessage
