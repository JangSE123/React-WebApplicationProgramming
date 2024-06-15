import React from 'react';

const QuestionInput = ({ questionNumber, questionText }) => {
  return (
    <>
      <p>
        {questionNumber}. {questionText}
      </p>
      <input
        type="text"
        style={{ width: '100%', height: '30px', fontSize: '24px', padding: '5px', textAlign: 'left' }}
        placeholder='&rarr;'
      />
    </>
  );
};

export default function Round1_3() {

  return (
    <div className="S3-container">
      <p>
        다음 속담의 틀린 부분을 바르게 고친 후 따라 읽어보세요(1~5).
      </p>
      <br/><br/><br/>

      <QuestionInput questionNumber={1} questionText="오는 말이 고와야 가는 말이 곱다." />
      <QuestionInput questionNumber={2} questionText="고래는 게 편." />
      <QuestionInput questionNumber={3} questionText="소똥도 약에 쓰려면 없다." />
      <QuestionInput questionNumber={4} questionText="노력 끝에 낙이 온다." />
      <QuestionInput questionNumber={5} questionText="소나기에 옷 젖는 줄 모른다." />

    </div>
  );
}
