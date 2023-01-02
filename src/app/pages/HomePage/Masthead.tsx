import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Logos } from './Logos';
import { Title } from './components/Title';
import { Lead } from './components/Lead';
import { A } from 'app/components/A';

export function Masthead() {
  return (
    <Wrapper>
      <Logos />
      <Title>React Boilerplate meets CRA</Title>
      <Lead>
        Ahihi Now you can use the{' '}
        <A
          href="https://www.reactboilerplate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Boilerplate
        </A>{' '}
        as a{' '}
        <A
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App
        </A>{' '}
        template.
      </Lead>
      <Link to={process.env.PUBLIC_URL + '/main'}>Main page</Link>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
