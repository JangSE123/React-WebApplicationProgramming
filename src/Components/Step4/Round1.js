import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stage1 from './Round1_file/Stage_1';
import Stage2 from './Round1_file/Stage_2';
import Stage3 from './Round1_file/Stage_3';
import Stage4 from './Round1_file/Stage_4';
import Stage5 from './Round1_file/Stage_5';



export default function CombinedPages() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="combined-pages-container">
      {currentPage === 1 && (
        <div>
          <Stage1 />

          <div className="button-container">
            <button onClick={() => navigate('/Step4')} className="roundBtn ">돌아가기</button>
            <button onClick={handleNextPage} className="roundBtn ">넘어가기</button>
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div>
          <Stage2 />

          <div className="button-container">
            <button onClick={() => setCurrentPage(1)} className="roundBtn ">돌아가기</button>
            <button onClick={() => setCurrentPage(3)} className="roundBtn ">넘어가기</button>
          </div>
        </div>
      )}

      {currentPage === 3 && (
        <div>
          <Stage3 />

          <div className="button-container">
            <button onClick={() => setCurrentPage(2)} className="roundBtn ">돌아가기</button>
            <button onClick={() => setCurrentPage(4)} className="roundBtn ">넘어가기</button>
          </div>
        </div>
      )}

      {currentPage === 4 && (
        <div>
          <Stage4 />

          <div className="button-container">
            <button onClick={() => setCurrentPage(3)} className="roundBtn ">돌아가기</button>
            <button onClick={() => setCurrentPage(5)} className="roundBtn ">넘어가기</button>
          </div>
        </div>
      )}

      {currentPage === 5 && (
        <div>
          <Stage5 />

          <div className="button-container">
            <button onClick={() => setCurrentPage(4)} className="roundBtn ">돌아가기</button>
            <button onClick={() => navigate('/Step4')} className="roundBtn ">홈으로</button>
          </div>
        </div>
      )}

    </div>
  );
}
