import styled from '@emotion/styled';
import { ProfileType } from '../../Types/ProfileType';
import { dataKR } from '../../utils/DateKR';

export interface DateType extends Array<number> {
  year: number;
  month: number;
  day: number;
}
export default function Profile({
  number,
  title,
  user,
  created_at,
  comments,
  state,
}: ProfileType) {
  const [year, month, day]: DateType = dataKR(created_at);
  const stateToUpper = state?.toUpperCase();
  return (
    <StProfileLayout>
      <div>
        <StOpen>{stateToUpper}</StOpen>
        <StTitle>
          #{number} <StSpan>{title}</StSpan>
        </StTitle>
        <StAuth>
          작성자: {user?.login}, 작성일: {year}년 {month}월 {day}일
        </StAuth>
      </div>
      <StComment>코멘트: {comments}</StComment>
    </StProfileLayout>
  );
}

const StProfileLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  height: 100px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: left;
  font-weight: 500;

  border-bottom: 2px solid #fff;
`;
const StAuth = styled.p`
  width: 70%;
  font-size: 14px;
  margin-bottom: 20px;
`;
const StComment = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  font-size: 14px;
  /* width: 100px; */
`;
const StOpen = styled.div`
  background-color: #b5f034;
  border-radius: 20px;
  text-align: center;
  font-weight: 700;
  width: 50px;
  padding: 7px;
  color: #3a3a3a;
  margin-bottom: 10px;
`;
const StSpan = styled.span`
  text-overflow: 'ellipsis';
`;
const StTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
