import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <StNotFound>
      <h1>온보딩 3주차</h1>
      <div>404 NotFound </div>

      <StMove>
        <Link to="/">홈으로 이동하기 </Link>
      </StMove>
    </StNotFound>
  );
}
const StNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100vh;

  font-size: 50px;
`;
const StMove = styled.div`
  border: 2px solid #fff;
  padding: 20px;
  margin-top: 20px;
`;
