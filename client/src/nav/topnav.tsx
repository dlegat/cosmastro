import React from 'react';
import { Link } from 'react-router-dom';

function Topnav() {
  return (
    <nav className="p-5 flex justify-between w-full absolute z-0">
        <Link to="/">cosmastro</Link>
        <div className="flex px-10">
            <h1 className="pr-10">Signs</h1>
            <h1>About</h1>
        </div>
    </nav>
  );
}

export default Topnav;