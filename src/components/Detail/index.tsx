import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useIssues } from '../../utils/IssuesContext';
import Profile from '../Profile';
export default function DetailItem() {
  const { detail, moveDetail } = useIssues();
  const params = useParams();
  useEffect(() => {
    moveDetail(params.id);
  }, [params, detail]);
  return (
    <>
      <StProfileLayout>
        <StImg src={`${detail?.user?.avatar_url}`} />

        <Profile
          number={detail?.number}
          title={detail?.title}
          login={detail?.user?.login}
          created_at={detail?.created_at}
          comments={detail?.comments}
          state={detail?.state}
        />
      </StProfileLayout>
      <StBody>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {detail?.body}
        </ReactMarkdown>
      </StBody>
    </>
  );
}
const StProfileLayout = styled.div`
  display: flex;
  gap: 10px;
`;
const StImg = styled.img`
  width: 50px;
  height: 50px;
  padding-top: 5px;
  border-radius: 100%;
`;
const StBody = styled.div`
  margin-top: 30px;
`;
