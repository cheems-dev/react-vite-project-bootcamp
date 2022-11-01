import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import PeopleListComponent from './components/container/people_list';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <TaskListComponent />
        <PeopleListComponent />
      </div>
    </div>
  );
}

export default App;
