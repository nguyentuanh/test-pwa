import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';
import { NavBar } from 'app/components/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';

import TestImage from './assets/test.png';

export function MainPage() {
  return (
    <>
      <Helmet>
        <title>Main page</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Title>Main page</Title>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
        <img src={TestImage} alt="test" width={300} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
