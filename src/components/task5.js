import React, { useState } from 'react';

const CountSmallerElements = () => {
  const [nums, setNums] = useState([5, 2, 6, 1]);
  const [counts, setCounts] = useState([]);

  const countSmaller = (nums) => {
    const smaller = new Array(nums.length).fill(0);
    
    const mergeSort = (indices) => {
      const half = Math.floor(indices.length / 2);
      if (half) {
        const left = mergeSort(indices.slice(0, half));
        const right = mergeSort(indices.slice(half));
        
        for (let i = indices.length - 1; i >= 0; i--) {
          if (!right.length || (left.length && nums[left[left.length - 1]] > nums[right[right.length - 1]])) {
            smaller[left[left.length - 1]] += right.length;
            indices[i] = left.pop();
          } else {
            indices[i] = right.pop();
          }
        }
      }
      return indices;
    };
    
    mergeSort([...Array(nums.length).keys()]);
    return smaller;
  };

  const handleCalculate = () => {
    setCounts(countSmaller(nums));
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Count Smaller Elements</h1>
      
      <div className="mb-5">
        <p className="text-lg text-gray-700">Input Array: {JSON.stringify(nums)}</p>
        <button
          onClick={handleCalculate}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Calculate
        </button>
      </div>
      
      {counts.length > 0 && (
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Counts Array:</h2>
          <p className="text-lg text-gray-700">{JSON.stringify(counts)}</p>
        </div>
      )}
    </div>
  );
};

export default CountSmallerElements;
