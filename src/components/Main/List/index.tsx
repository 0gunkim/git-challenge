import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersection';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useIssues } from '../../../utils/IssuesContext';
import MainItem from '../Item';
import wanted from '../../../assets/wanted.svg';
import Loading from '../../common/Loading';
import { IssueType } from '../../../Types/IssueType';

export default function MainList() {
  const { issues, pageCount, isLoading } = useIssues();
  const ref = useIntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        pageCount();
      }
    },
    { threshold: 0.5 },
  );

  return (
    <div>
      {issues?.map((items: IssueType, idx: number) => (
        <div key={items.number}>
          {idx % 5 === 4 ? (
            <Link to={`https://www.wanted.co.kr/`} target="_blank">
              <StImg src={wanted} alt="img" />
            </Link>
          ) : (
            <MainItem items={items} />
          )}
        </div>
      ))}
      {isLoading === 'fullfilled' ? null : <Loading />}
      <div ref={ref}></div>
    </div>
  );
}
const StImg = styled.img`
  margin: 10px 0;
  border: 1px solid #fff;
  cursor: pointer;
`;
