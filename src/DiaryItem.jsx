const DiaryItem = ({ id, author, content, emotion, createdDate, onRemove }) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <span className='date'>{new Date(createdDate).toLocaleString()}</span>
      </div>
      <div className='content'>{content}</div>
      <button onClick={handleRemove}>삭제하기</button>
    </div>
  );
};

export default DiaryItem;
