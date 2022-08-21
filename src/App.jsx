import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '윤우상',
    content: '안녕',
    emotion: 5,
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    author: '아무개',
    content: '안녕1',
    emotion: 4,
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    author: '홍길동',
    content: '안녕2',
    emotion: 2,
    createdDate: new Date().getTime(),
  },
];

function App() {
  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
