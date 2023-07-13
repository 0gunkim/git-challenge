import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <>
      <Link to="/">
        <HeaderStyle></HeaderStyle>
      </Link>
    </>
  );
}
const HeaderStyle = styled.h1`
  display: block;
  background-color: #0d1117;
  position: fixed;
  top: 50px;
`;
