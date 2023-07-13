import styled from '@emotion/styled';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StLayout>{children}</StLayout>;
}
const StLayout = styled.div`
  width: 500px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  background-color: #0d1117;
  padding: 70px 20px 100px 20px;
  margin: 50px auto;

  overflow-y: scroll;
  border: 5px solid #000000;
`;
