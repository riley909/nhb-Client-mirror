import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { postUploadTopicT } from '../../api/postUploadTopic';
import { RootState } from '../../reducers';

export default function UploadTopic() {
  const state = useSelector((state: RootState) => state.reducer);
  const [uploadTopic, setUploadTopic] = useState({
    word: '',
    expiration: '',
  });

  const { word, expiration } = uploadTopic;

  const onClickHandler = (e: any) => {
    if (!word || !expiration) return;
    e.preventDefault();
    const accessToken = state.accessToken;
    if (accessToken) {
      postUploadTopicT({ word, expiration }, accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
      setUploadTopic({
        ...uploadTopic,
        word: '',
        expiration: '',
      });
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUploadTopic({
      ...uploadTopic,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>UploadTopic</h1>
      <input
        name="expiration"
        type="text"
        value={uploadTopic.expiration}
        placeholder="2021-04-15 00:00:00.000"
        onChange={onChangeHandler}
      />
      <input
        name="word"
        value={uploadTopic.word}
        type="text"
        placeholder="주말"
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>전송</button>
    </div>
  );
}
