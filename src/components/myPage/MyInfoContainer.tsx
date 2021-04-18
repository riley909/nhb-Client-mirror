import React from 'react';
import MyIntroduction from './MyIntroduction';
import MyNickName from './MyNickName';

import MyPhoto from './MyPhoto';

interface MyInfoContainerProps {
  myInfoModalHandler: () => void;
}

export default function MyInfoContainer({
  myInfoModalHandler,
}: MyInfoContainerProps) {
  return (
    <div>
      <h1>MyInfoContainer</h1>
      <button onClick={myInfoModalHandler}>수정하기</button>
      <MyPhoto />
      <MyNickName />
      <MyIntroduction />
    </div>
  );
}
