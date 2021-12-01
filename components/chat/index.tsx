import { FC } from 'react'

import MessagesContainer from '../message-container'
import BUttonSendMessage from '../button-send-message'
import Input from '../input'
import { Container, ChatInput } from './chat.styles'

const Chat: FC = () => (
  <Container>
    <MessagesContainer/>
    <ChatInput>
      <Input placeholder="type a message" />
      <BUttonSendMessage title="Enviar" />
    </ChatInput>
  </Container>
)
export default Chat
