import React, { useState } from 'react';

const LongestConsecutiveChain = () => {
  const [nums, setNums] = useState([1,5,2,3,10]);
  const [longestChain, setLongestChain] = useState(0);

  const findLongestConsecutiveChain = (nums) => {
    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of nums) {
      // Check if it's the start of a chain
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentLength = 1;

        // Extend the chain
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentLength += 1;
        }

        maxLength = Math.max(maxLength, currentLength);
      }
    }

    return maxLength;
  };

  const handleCalculate = () => {
    setLongestChain(findLongestConsecutiveChain(nums));
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Longest Consecutive Chain
      </h1>
      
      <div className="mb-5">
        <p className="text-lg text-gray-700">Input Array: {JSON.stringify(nums)}</p>
        <button
          onClick={handleCalculate}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Calculate
        </button>
      </div>
      
      {longestChain > 0 && (
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Longest Chain Length:</h2>
          <p className="text-lg text-gray-700">{longestChain}</p>
        </div>
      )}
    </div>
  );
};

export default LongestConsecutiveChain;
