import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onRemove }) => {
  return (
    <div className='DiaryList'>
      <h2>Diary List</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      {diaryList.map(diary => {
        return <DiaryItem key={diary.id} {...diary} onRemove={onRemove} />;
      })}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
