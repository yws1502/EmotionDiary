import React, { useEffect, useRef, useState } from 'react';

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  createdDate,
  onRemove,
  onUpdate,
}) => {
  useEffect(() => {
    console.log(`${id}번 째 아이템 렌더`);
  });

  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);

  const localContentRef = useRef();

  const toggleIsEdit = () => setIsEdit(!isEdit);
  const handleChangeContent = event => {
    setLocalContent(event.target.value);
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setLocalContent(content);
    setIsEdit(!isEdit);
  };

  const handleUpdate = () => {
    if (localContent.length < 5) {
      localContentRef.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onUpdate(id, localContent);
      setIsEdit(!isEdit);
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
      <div className='content'>
        {isEdit ? (
          <textarea
            name='content'
            value={localContent}
            onChange={handleChangeContent}
            ref={localContentRef}
          />
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleUpdate}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
