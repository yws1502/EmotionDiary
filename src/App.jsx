import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useRef, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

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
