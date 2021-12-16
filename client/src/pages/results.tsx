import React from 'react';
import TraitWidget from '../components/trait-widget';


function Results() {
  return (
      <div className="flex justify-center items-center h-full z-10">
        <div className="bg-transparent flex flex-col">
            <h1 className="flex justify-center pb-10 text-5xl">Results</h1>

            <span className="flex justify-center">These are the results</span>
            <div className="flex justify-center">
                <button className="mt-20 w-40 border-2 rounded py-2">Another one</button>
            </div>
        </div>
      </div>
  );
}

export default Results;