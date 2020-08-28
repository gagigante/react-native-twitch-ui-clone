import React from 'react';

import Header from '../../components/Header';

import { Wrapper, Container, Main } from './styles';

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />

        <Main></Main>
      </Container>
    </Wrapper>
  );
}

export default Following;