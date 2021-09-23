import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, ContentInput, InputSearch } from './style'

export const Search = () => {
  return (
    <Container>
      <ContentInput>
        <Feather name="search" size={24} color="black" />
        <InputSearch placeholder="O que procuras?" />
      </ContentInput>
    </Container>
  )
}