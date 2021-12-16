import React from 'react';
import TraitWidget from '../components/trait-widget';


function Traits() {
  return (
      <div className="flex justify-center items-center h-full w-full z-10">
        <div className="bg-transparent mx-5 flex flex-col w-full lg:w-1/3">
            <h1 className="flex justify-center pb-10 text-5xl">Traits</h1>

            <span className="flex justify-center mb-10">Let's answer some questions about them…</span>
            <TraitWidget/>
        </div>
      </div>

  );
}

export default Traits;