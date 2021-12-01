import { FC } from 'react'

import { Container, Message } from './message-container.styles'
import { fakeData } from './message-container.fake-data'

const MessagesContainer: FC = () => (
  <Container>
    {fakeData.map(item => (
      <Message
        key={item.id}
        owner={item.owner}
      >
      {item.message}
      </Message>
    ))}
  </Container>
)

export default MessagesContainer
