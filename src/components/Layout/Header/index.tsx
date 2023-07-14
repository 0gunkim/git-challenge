import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useIssues } from '../../../utils/IssuesContext';
import { orgRepoName } from '../../../utils/OrgRefoName';

export default function Header() {
  const { issues } = useIssues();
  const { orgName, repoName } = orgRepoName(issues);
  return (
    <>
      <Link to="/">
        <HeaderStyle>
          {orgName} / {repoName}
        </HeaderStyle>
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
