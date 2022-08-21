import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useEffect, useRef, useState } from 'react';

// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then(res => res.json());

    const initData = res.slice(0, 20).map(it => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createdDate: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime();
    const newData = {
      author,
      content,
      emotion,
      createdDate,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newData, ...data]);
  };

  const onRemove = targetId => {
    const newData = data.filter(it => it.id !== targetId);
    setData(newData);
  };

  const onUpdate = (targetId, newContent) => {
    setData(
      data.map(it => (it.id === targetId ? { ...it, content: newContent } : it))
    );
  };

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
