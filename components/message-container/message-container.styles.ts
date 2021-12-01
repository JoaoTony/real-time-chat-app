import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`

export const Message = styled.div<{ owner: boolean }>`
  max-width: 75%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  margin: 10px 0;
  background-color: ${({ owner }) => owner ? '#9400D3' : '#E6E6FA'};
  color: ${({ owner }) => owner ? '#fff' : '#808080'};

  align-self: ${({ owner }) => owner ? 'flex-end' : 'flex-start'};
`
