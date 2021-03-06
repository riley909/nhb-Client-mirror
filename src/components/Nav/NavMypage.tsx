import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postBringUserInfoThunk } from '../../actions/actions';
import { RootState } from '../../reducers';

function NavMyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const accessToken = state.accessToken;
  useEffect(() => {
    if (accessToken)
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
  }, []);

  return (
    <div>
      <Link to="/mypage">My Page</Link>
      <div>Welcome back!</div>
    </div>
  );
}

export default NavMyPage;
