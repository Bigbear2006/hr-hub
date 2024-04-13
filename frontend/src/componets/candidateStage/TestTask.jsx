import React from 'react';

const TestTask = ({handleTest1Complete}) => {
  return (
    <>
      <div>TestTask</div>
			<button onClick={handleTest1Complete}>Следующий шаг</button>
    </>
  );
};
export default TestTask;
