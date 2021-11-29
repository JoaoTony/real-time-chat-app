import { FC } from 'react'

import Input from '../input'
import { Container } from './chat.styles'

const Chat: FC = () => (
  <Container>
    <Input placeholder="type a message" />
  </Container>
)
export default Chat
