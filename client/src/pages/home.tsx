import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
      <div className="flex justify-center items-center h-full w-screen z-10">
        <div className="bg-transparent flex flex-col">
            <h1 className="flex justify-center pb-10 text-5xl">cosmastro</h1>

            <span className="flex justify-center">Use Cosmastro to see how well you know someone as it pertains to their astrology chart.</span>
            <span className="flex justify-center">Explore personality commonalities between you and others.</span>

            <div className="flex justify-center">
            <Link to="/traits">
                <button className="mt-20 w-40 border-2 rounded py-2">Get Started</button>
            </Link>
            </div>
        </div>
      </div>
  );
}

export default Home;