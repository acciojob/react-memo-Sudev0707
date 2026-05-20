import React, { useMemo } from 'react';

const ExpensiveCalculation = ({ number }) => {
  const calculateExpensiveValue = (num) => {
    console.log('Calculating expensive value...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result + num;
  };

  const expensiveValue = useMemo(() => calculateExpensiveValue(number), [number]);

  return (
    <div className="expensive-calculation">
      <h3>Expensive Calculation Result</h3>
      <p>{expensiveValue.toLocaleString()}</p>
      <small>* This calculation only runs when the number changes</small>
    </div>
  );
};

export default React.memo(ExpensiveCalculation);