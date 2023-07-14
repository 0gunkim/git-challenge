import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../Profile';
import { ProfileType } from '../../../Types/ProfileType';
interface ItemsPropsType {
  items: ProfileType;
}

export default function MainItem(props: ItemsPropsType) {
  const { number, title, created_at, comments, user, state } = props.items;

  return (
    <>
      <Link to={`/detail/${number}`}>
        <Profile
          number={number}
          title={title}
          user={user}
          created_at={created_at}
          comments={comments}
          state={state}
        />
      </Link>
    </>
  );
}
