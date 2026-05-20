import React, { useState, useMemo, useCallback } from 'react';
import TodoList from './TodoList';
import '../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState(['Learn React', 'Build a project', 'Write documentation']);
  const [customSkill, setCustomSkill] = useState('');
  const [count, setCount] = useState(0);
  const [validationError, setValidationError] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  // Add default todo
  const addDefaultTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Add Todo button (same as addDefaultTodo for the requirement)
  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Increment counter
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Handle custom skill input change
  const handleSkillChange = (e) => {
    const value = e.target.value;
    setCustomSkill(value);
    if (value.length > 5) {
      setValidationError('');
    } else if (value.length > 0) {
      setValidationError('Skill must be more than 5 characters');
    } else {
      setValidationError('');
    }
  };

  // Add custom skill (validated)
  const addCustomSkill = () => {
    if (customSkill.trim().length > 5) {
      setSkills([...skills, customSkill.trim()]);
      setCustomSkill('');
      setValidationError('');
    } else {
      setValidationError('Skill must be more than 5 characters');
    }
  };

  // useMemo for expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) { 
      result += i;
    }
    return result;
  }, [count]); 

  return (
    <div className="app">
      <h1>React.useMemo</h1>
      
      <div className="container">
        <div className="section">
          <h2>My todos</h2>
          <TodoList todos={todos} />
          
          <div className="button-group">
            <button className="btn btn-primary" onClick={addDefaultTodo}>
              New Todo
            </button>
            <button className="btn btn-success" onClick={addTodo}>
              Add Todo
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Counter</h2>
          <div className="counter-display">
            <span>Count: {count}</span>
            <button className="btn btn-secondary" onClick={incrementCount}>
              +
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Expensive Calculation</h2>
          <div className="expensive-value">
            Result: {expensiveValue.toLocaleString()}
          </div>
          <p className="note">* Recalculates only when counter changes (Count: {count})</p>
        </div>

        <div className="section">
          <h2>React.memo Example</h2>
          <div className="skill-input">
            <input
              type="text"
              value={customSkill}
              onChange={handleSkillChange}
              placeholder="Enter a skill (min 6 characters)"
              className={validationError ? 'error-input' : ''}
            />
            <button 
              className="btn btn-primary" 
              onClick={addCustomSkill}
              disabled={customSkill.trim().length <= 5}
            >
              Add Skill
            </button>
          </div>
          {validationError && <div className="error-message">{validationError}</div>}
          
          <div className="skills-list">
            <h3>Skills:</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;