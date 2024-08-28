import './App.css';
import "react-router-dom";
import SearchFilter from './components/search';
import Task from './components/task5';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
    <SearchFilter />
    <Task/>
  </div>
  );
}

export default App;
