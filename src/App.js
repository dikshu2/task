import './App.css';
import "react-router-dom";
import SearchFilter from './components/search';
import Task from './components/task5';
import LongestConsecutiveChain from './components/task3';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
    <SearchFilter />
    <Task/>
    <LongestConsecutiveChain/>
  </div>
  );
}

export default App;
