import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRankThunk } from '../../actions/actions';

import { RootState } from '../../reducers';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const privateFeeds = state.privateFeeds.data?.data;
  console.log(privateFeeds);

  return (
    <div>
      <h1>MyWorkContainer</h1>
      {privateFeeds ? <MyWork /> : '데이터가 없습니다'}
    </div>
  );
}
