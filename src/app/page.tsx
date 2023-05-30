'use client';

import styled from 'styled-components';
import { Suspense, lazy } from 'react';

const MyFoodList = lazy(() => import('@/components/MyFoodList'));

const Home = () => {
  return (
    <Wrapper>
      <h1>내가 야무지게 먹은 것</h1>
      <Suspense fallback={<div>로뒹중~</div>}>
        <MyFoodList />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    margin: 64px 0;
    text-align: center;
  }
`;

export default Home;
