import { useRef, useState } from 'react';

const DiaryEditor = () => {
  const authorRef = useRef();
  const contentRef = useRef();

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const handleChangeState = event => {
    const target = event.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {
    if (!state.author.length) {
      authorRef.current.focus();
      return;
    }
    if (!state.content.length) {
      contentRef.current.focus();
      return;
    }

    alert('저장 성공');
    setState({
      ...state,
      author: '',
      content: '',
    });
  };

  return (
    <div className='DiaryEditor'>
      <h2>ToDay Diary</h2>
      <div>
        <input
          name='author'
          type='text'
          value={state.author}
          onChange={handleChangeState}
          placeholder='작성자'
          ref={authorRef}
        />
        <div>
          <textarea
            name='content'
            value={state.content}
            onChange={handleChangeState}
            placeholder='일기 작성'
            ref={contentRef}
          />
        </div>
      </div>
      <div>
        <select
          name='emotion'
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
